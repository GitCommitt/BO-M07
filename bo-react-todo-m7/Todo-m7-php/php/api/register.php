<?php
header("Access-Control-Allow-Methods: POST, PUT, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Origin: http://localhost:5173");

// header("Content-Type: application/json; charset=UTF-8");

require_once('../connect.php');

$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

$username = $data["username"] ?? '';
$plain_pw = $data["password"] ?? '';

if($username == '' || $plain_pw == ''){
    exit("Error, username or pw are missing"); 
}

$hashed_pw = password_hash($plain_pw, PASSWORD_DEFAULT);

$stmt = $mysqli->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $username, $hashed_pw);
if ($stmt->execute()) {
    echo json_encode(["message" => "Registration successful"]);
} else {
    echo json_encode(["message" => "Registration failed"]);
}
$stmt->close();
$mysqli->close();