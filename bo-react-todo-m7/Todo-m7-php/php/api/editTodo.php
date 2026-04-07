<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: PATCH, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

require_once('../connect.php');

$data = json_decode(file_get_contents("php://input"), true);

if (empty($data['id'])) {
    echo "Geen of incorrecte JSON!";
    exit;
}

$text = $data['id'];
$stmt = $mysqli->prepare("UPDATE todos SET status=? WHERE id = ?");

$status = $data["status"];
$stmt->bind_param("si", $status, $text);

if ($stmt->execute()) { 
    echo "Success!";
} else {
    echo "Failure!";
}

$stmt->close();
$mysqli->close();
?>