<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
$config = require_once "config.php";
if ($config['CORS']) {
    require_once "cors.php";
}
require_once "InvoiceOrm.php";

$cookieLifeTime = 60 * 60 * 24 * 60;
ini_set('session.cookie_lifetime', $cookieLifeTime);
session_start();

$loggedIn = $_SESSION['logged_in'] ?? false;

if (!$loggedIn) {
    http_response_code(401);
    print('Unauthorized');
    exit();
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method == 'POST') {
    $invoiceRequest = getInvoiceRequest();
    $invoiceNumber = createInvoice($invoiceRequest);
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


function getInvoiceRequest(): array|null {
    try {
        $body = file_get_contents('php://input');
        $json = json_decode($body, true, 10, JSON_THROW_ON_ERROR);
        validateInvoiceRequest($json);
        return $json;
    } catch (Exception) {
        http_response_code(400);
        print('Invalid Request body');
        exit();
    }
}

function validateInvoiceRequest($json) {
    if (!is_array($json) ||
        !array_key_exists('customerName', $json) ||
        empty($json['customerName']) ||
        !array_key_exists('invoiceItems', $json) ||
        !is_array($json['invoiceItems']) ||
        count($json['invoiceItems']) == 0) {
        throw new RuntimeException("Invalid Request body");
    }
    foreach ($json['invoiceItems'] as $invoiceItem) {
        if (empty($invoiceItem['item'] ?? '') ||
            ($invoiceItem['amount'] ?? 0) == 0 ||
            ($invoiceItem['price'] ?? 0) == 0) {
            throw new RuntimeException("Invalid invoiceItem");
        }
    }
}

function createInvoice(array $invoiceRequest): string {
    $invoiceOrm = new InvoiceOrm();
    $totalPrice = 0;
    $invoiceItems = $invoiceRequest['invoiceItems'];
    $customerName = $invoiceRequest['customerName'];
    foreach ($invoiceItems as $idx => $invoiceItem) {
        if ($invoiceItem['id'] == 'laundry') {
            $itemTotal = $invoiceItem['price'];
        } else {
            $itemTotal = $invoiceItem['amount'] * $invoiceItem['price'];
        }
        $totalPrice += $itemTotal;
        $invoiceItems[$idx]['totalPrice'] = $itemTotal;
    }

    list($invoiceId, $invoiceNumber) = $invoiceOrm->createInvoice($customerName, $totalPrice);

    foreach ($invoiceItems as $invoiceItem) {
        $invoiceOrm->createInvoiceItem($invoiceId, $invoiceItem['item'], $invoiceItem['amount'],
            $invoiceItem['price'], $invoiceItem['totalPrice']);
    }

    return $invoiceNumber;
}


