<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
$config = require_once "config.php";
if ($config['CORS']) {
    require_once "cors.php";
}
require_once "InvoiceOrm.php";

ini_set('session.cookie_lifetime', 5184000);
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