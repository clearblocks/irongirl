<?php
session_start();

if ($_SESSION['logged_in'] ?? false) {
    print(json_encode(['logged_in' => true]));
} else {
    $loggedIn = ($_POST['password'] ?? null) === 'banaan';
    $_SESSION['logged_in'] = $loggedIn;
    print(json_encode(['logged_in' => $loggedIn]));
}