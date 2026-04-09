-- Database initialisatie voor todo app
CREATE DATABASE IF NOT EXISTS todo_app_m7;
USE todo_app_m7;

-- Todos tabel
CREATE TABLE IF NOT EXISTS todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    status VARCHAR(50) DEFAULT 'todo',
    `timestamp` DATETIME DEFAULT CURRENT_TIMESTAMP
);