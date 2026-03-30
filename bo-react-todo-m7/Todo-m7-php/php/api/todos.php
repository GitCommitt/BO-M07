<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

$servername = "db";
$username = "root";
$password = "rootpassword";
$dbname   = "todo_app";

$conn = mysqli_connect($servername, $username, $password, $dbname);

$result = $conn->query("SELECT * FROM todos");
 header('Content-Type: application/json; charset=utf-8');

print_r(json_encode($result->fetch_all(MYSQLI_ASSOC)));
