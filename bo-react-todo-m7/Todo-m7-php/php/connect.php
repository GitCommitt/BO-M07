<?php
// MySQL verbinding
$mysqli = new mysqli("db", "root", "rootpassword", "todo_app_m7");

// Check voor verbindingsfouten
if ($mysqli->connect_error) {
    die("Verbinding mislukt: " . $mysqli->connect_error);
}

// Maak de todos tabel automatisch aan wanneer deze nog niet bestaat
$createTable = "CREATE TABLE IF NOT EXISTS todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'todo',
    `timestamp` DATETIME DEFAULT CURRENT_TIMESTAMP
)";

if (!$mysqli->query($createTable)) {
    die("Tabel maken mislukt: " . $mysqli->error);
}
