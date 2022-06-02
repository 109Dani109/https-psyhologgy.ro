<?php

$servername = "localhost";
$username = "asistent_asistent";
$password = "m1^3o~nG{iZa";
$database = "asistent_newsletter";   

// Create connection
$conn = new mysqli($servername, $username, $password,$database);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 

?>