<?php
// MySQL verbinding
$mysqli = new mysqli("db", "root", "rootpassword", "todo_app");

// Check voor verbindingsfouten
if ($mysqli->connect_error) {
    die("Verbinding mislukt: " . $mysqli->connect_error);
}