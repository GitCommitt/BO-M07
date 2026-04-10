<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

require_once('../connect.php');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

if (empty($data['id'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Geen id opgegeven']);
    exit;
}

$id = intval($data['id']);
$stmt = $mysqli->prepare('DELETE FROM todos WHERE id = ?');
$stmt->bind_param('i', $id);

if ($stmt->execute()) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Kon todo niet verwijderen']);
}

$stmt->close();
$mysqli->close();
