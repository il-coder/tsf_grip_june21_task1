<?php
$servername = "localhost";
$username = "id16986710_piyush";
$password = "P@ssw0rd@2021";
$dbname = "id16986710_bbs";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>