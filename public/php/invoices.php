<?php
require_once "InvoiceOrm.php";

session_start();

$loggedIn = $_SESSION['logged_in'] ?? false;

if (!$loggedIn) {
    http_response_code(401);
    print('Unauthorized');
    exit();
}

$month = $_GET['month'] ?? null;
if ($month === null) {
    $month = date('Y-m');
}

$invoices = (new InvoiceOrm())->getInvoices($month);

header('Content-Type: application/json');
print(json_encode($invoices));