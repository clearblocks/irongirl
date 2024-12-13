<?php
require_once "InvoiceOrm.php";

session_start();

$loggedIn = $_SESSION['logged_in'] ?? false;

if (!$loggedIn) {
    http_response_code(401);
    print('Unauthorized');
    exit();
}

$invoiceItems = getRequestInvoiceItems();
createInvoice($invoiceItems);

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

function createInvoice(array $invoiceItems) {
    $invoiceOrm = new InvoiceOrm();
    $totalPrice = 0;
    foreach ($invoiceItems as $idx => $invoiceItem) {
        $itemTotal = $invoiceItem['amount'] * $invoiceItem['price'];
        $totalPrice += $itemTotal;
        $invoiceItems[$idx]['totalPrice'] = $itemTotal;
    }

    $invoiceId = $invoiceOrm->createInvoice($totalPrice);

    foreach ($invoiceItems as $invoiceItem) {
        $invoiceOrm->createInvoiceItem($invoiceId, $invoiceItem['item'], $invoiceItem['amount'],
                                        $invoiceItem['price'], $invoiceItem['totalPrice']);
    }
}


