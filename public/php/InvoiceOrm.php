<?php

class InvoiceOrm {

    static int $INITIAL_INVOICE_NUMBER = 2024002;

    private $connection;

    public function __construct() {
        $this->connection = $this->connect();
    }

    private function connect() {

        $config = require('config.php');

        $servername = $config['DB_HOST'];
        $database = $config['DB_NAME'];
        $username = $config['DB_USER'];
        $password = $config['DB_PASSWORD'];

        $connection = mysqli_connect($servername, $username, $password, $database);

        if ($connection->connect_error) {
            http_response_code(500);
            print("Database Connection failed");
            exit();
        }
        return $connection;
    }

    public function getInvoices(string $month): array {
        $monthStartStr = $month . '-01';
        $monthStart = new DateTime($monthStartStr);
        $nextMonthStart = new DateTime($monthStartStr);
        $nextMonthStart->modify('+1 month');
        $nextMonthStartStr = $nextMonthStart->format('Y-m-d');

        $query = "SELECT * FROM invoices WHERE created_datetime >= ? AND created_datetime < ?;";
        $result = $this->connection->execute_query($query, [$monthStartStr, $nextMonthStartStr]);
        $rows = $result->fetch_all(MYSQLI_ASSOC);
        return array_map(fn($row) => [
            'created' => $row['created_datetime'],
            'invoiceNumber' => $row['invoice_number'],
            'totalPriceExVat' => $row['total_price_ex_vat'],
            'vat' => $row['vat'],
            'totalPrice' => $row['total_price']
        ], $rows);
    }

    public function createInvoice(int $totalPrice): int {
        $vat = round(($totalPrice / 121) * 21);
        $totalPriceExVat = $totalPrice - $vat;
        $invoiceNumber = $this->getNextInvoiceNumber();
        $query = "INSERT INTO invoices (invoice_number, total_price_ex_vat, vat, total_price, created_datetime)
                  VALUES (?, ?, ?, ?, NOW())";
        $this->connection->execute_query($query, [$invoiceNumber, $totalPriceExVat, $vat, $totalPrice]);
        return $this->connection->insert_id;
    }

    public function createInvoiceItem(int $invoiceId, string $item, int $amount, int $itemPrice, int $totalPrice) {
        $vat = round(($totalPrice / 121) * 21);
        $totalPriceExVat = $totalPrice - $vat;
        $query = "INSERT INTO invoice_items (invoice_id, item, amount, item_price, total_price_ex_vat, vat, total_price)
                  VALUES     (?, ?, ?, ?, ?, ?, ?)";
        $this->connection->execute_query($query, [$invoiceId, $item, $amount, $itemPrice, $totalPriceExVat, $vat, $totalPrice]);
    }

    private function getNextInvoiceNumber(): int {
        $currentYear = (int) date("Y");
        $nextYear = $currentYear + 1;
        $currentYearStart = (int) "{$currentYear}000";
        $nextYearStart = (int) "{$nextYear}000";
        $query = "SELECT max(invoice_number) as invoice_number FROM invoices
                  WHERE invoice_number >= ? AND invoice_number < ?";
        $result = $this->connection->execute_query($query, [$currentYearStart, $nextYearStart]);
        $row = $result->fetch_assoc();
        if (empty($row['invoice_number'])) {
            return self::$INITIAL_INVOICE_NUMBER;
        }

        return ((int) $row['invoice_number']) + 1;
    }
}