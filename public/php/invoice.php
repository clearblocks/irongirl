<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
$config = require_once "config.php";
if ($config['CORS']) {
    require_once "cors.php";
}
require_once "InvoiceOrm.php";

session_start();

$loggedIn = $_SESSION['logged_in'] ?? false;

if (!$loggedIn) {
    http_response_code(401);
    print('Unauthorized');
    exit();
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'POST') {
    $invoiceItems = getRequestInvoiceItems();
    $invoiceNumber = createInvoice($invoiceItems);
    header('Content-Type: application/json');
    print(json_encode(['invoiceNumber' => $invoiceNumber]));
} else {
    $invoiceNumber = $_GET['invoiceNumber'] ?? null;
    if ($invoiceNumber == null) {
        http_response_code(400);
        print('Invoice number must be provided');
        exit();
    }
    $invoice = (new InvoiceOrm())->getInvoice($invoiceNumber);
    header('Content-Type: application/json');
    print(json_encode($invoice));
}


function getRequestInvoiceItems(): array|null {
    try {
        $body = file_get_contents('php://input');
        $invoiceItems = json_decode($body, true, 10, JSON_THROW_ON_ERROR);
        if (!is_array($invoiceItems) ||
            count($invoiceItems) == 0) {
            throw new RuntimeException("Invalid invoiceItems");
        }
        foreach ($invoiceItems as $invoiceItem) {
            if (empty($invoiceItem['item'] ?? '') ||
                ($invoiceItem['amount'] ?? 0) == 0 ||
                ($invoiceItem['price'] ?? 0) == 0) {
                throw new RuntimeException("Invalid invoiceItem");
            }
        }
        return $invoiceItems;
    } catch (Exception) {
        http_response_code(400);
        print('Invalid Request body');
        exit();
    }
}

function createInvoice(array $invoiceItems): string {
    $invoiceOrm = new InvoiceOrm();
    $totalPrice = 0;
    foreach ($invoiceItems as $idx => $invoiceItem) {
        if ($invoiceItem['id'] == 'laundry') {
            $itemTotal = $invoiceItem['price'];
        } else {
            $itemTotal = $invoiceItem['amount'] * $invoiceItem['price'];
        }
        $totalPrice += $itemTotal;
        $invoiceItems[$idx]['totalPrice'] = $itemTotal;
    }

    list($invoiceId, $invoiceNumber) = $invoiceOrm->createInvoice($totalPrice);

    foreach ($invoiceItems as $invoiceItem) {
        $invoiceOrm->createInvoiceItem($invoiceId, $invoiceItem['item'], $invoiceItem['amount'],
                                        $invoiceItem['price'], $invoiceItem['totalPrice']);
    }

    return $invoiceNumber;
}


