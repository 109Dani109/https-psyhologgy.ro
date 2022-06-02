<?php
include "connect.php";

// Get Email Input

$email = $_POST["email"];


  $query = mysqli_query($conn, "SELECT * FROM `Email` WHERE email = '$email'");

  
  
  if(mysqli_num_rows($query) < 1) {
    $sql = "INSERT INTO Email (email) VALUES ('$email')";
    
    include "redirectPoz.php";
  } else {
    $sql = "";

    include "redirectNeg.php";
    
  }


if ($conn->query($sql) === TRUE) {

  echo "Finish";

} else {

  echo "Error: " . $sql . "<br>" . $conn->error;

}


?>