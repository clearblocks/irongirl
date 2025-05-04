<?php
$config = require_once "config.php";
if ($config['CORS']) {
    require_once "cors.php";
}

$cookieLifeTime = 60 * 60 * 24 * 60;
ini_set('session.cookie_lifetime', $cookieLifeTime);
session_start();

if ($_SESSION['logged_in'] ?? false) {
    print(json_encode(['logged_in' => true]));
} else {
    $loggedIn = strtolower($_POST['password'] ?? '') === 'banaan';
    $_SESSION['logged_in'] = $loggedIn;
    print(json_encode(['logged_in' => $loggedIn]));
}