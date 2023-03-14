<?php

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$subject = "Irongirl.nl bericht van $name";
$body =
    "Beste Irongirl,\n\n" .
    "Je hebt een bericht ontvangen van $name.\n\n" .
    "E-mailadres: $email\n" .
    "Telefoonnummer: $phone\n\n" .
    $message;

$mailTo = "theo@clearblocks.nl";

$headers = "From: Irongirl.nl Contactformulier <$mailTo>\r\nReply-To: $name <$email>";

if (!mail($mailTo, $subject, $body, $headers)) {
    throw new Exception("Something went wrong with sending the message");
}
