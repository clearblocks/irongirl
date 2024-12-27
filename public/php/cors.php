<?php

ini_set('session.cookie_samesite', 'None');
ini_set('session.cookie_secure', '0');
ini_set('session.cookie_domain', 'localhost');

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// If the request method is OPTIONS, respond with a 200 status and exit
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}