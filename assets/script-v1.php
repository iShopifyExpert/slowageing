<?php
$crl = curl_init();


$headers = [
    'Authorization: Basic 75bf7c0da5a39a63607093dbd52d18dd-us20 ',
    'Access-Control-Allow-Origin' : *,	
    'Content-type: application/json',
    'cache-control: no-cache'
];

$name = $_POST['name'];
$email = $_POST['email'];

$post = array(
    'merge_fields' => ['FNAME' => $name],
    'email_address' => $email,
    'status' => 'subscribed'
);

$string = json_encode($post);
$url = "result.html";

curl_setopt($crl, CURLOPT_URL, "https://us20.api.mailchimp.com/3.0/lists/287e6d6c5c/members");
curl_setopt($crl, CURLOPT_HTTPHEADER, $headers);
curl_setopt($crl, CURLOPT_POST, true);

curl_setopt($crl, CURLOPT_USERAGENT, 'PHP-MCAPI/2.0');

curl_setopt($crl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($crl, CURLOPT_SSL_VERIFYPEER, false);

curl_setopt($crl, CURLOPT_TIMEOUT, 10);
curl_setopt($crl, CURLOPT_POSTFIELDS, $string);
curl_setopt($crl, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($crl, CURLOPT_RETURNTRANSFER, true);
$rest = curl_exec($crl);
$httpcode = curl_getinfo($crl, CURLINFO_HTTP_CODE);
curl_close($crl);
echo $httpcode;
return $httpcode;


?>