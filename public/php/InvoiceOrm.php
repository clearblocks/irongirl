<?php

class InvoiceOrm {

    static int $INITIAL_INVOICE_NUMBER = 2024002;

    private $connection;

    public function __construct() {
        $this->connection = $this->connect();
    }

    private function connect() {
        $servername = "db";
        $username = "irongirl";
        $password = "irongirl";
        $database = "irongirl";

        $connection = mysqli_connect($servername, $username, $password, $database);

        if ($connection->connect_error) {
            http_response_code(500);
            print("Database Connection failed");
            exit();
        }
        return $connection;
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