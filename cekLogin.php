<?php
session_start();
$connection = mysql_connect("localhost", "root", ""); // Establishing connection with server..
$db = mysql_select_db("apesbener", $connection); // Selecting Database.
$email=trim($_POST['email1']); // Fetching Values from URL.
$password= trim($_POST['password1']); // Password Encryption, If you like you can also leave sha1.
// check if e-mail address syntax is valid or not
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // sanitizing email(Remove unexpected symbol like <,>,?,#,!, etc.)
if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
echo "Invalid Email.......";
}else{
// Matching user input email and password with stored email and password in database.
$result = mysql_query("SELECT * FROM donatur WHERE emailDonatur='$email' AND Password='$password'");
$row=mysql_fetch_array($result);
$data = mysql_num_rows($result);
if($data==1){
echo "Successfully Logged in...";
$_SESSION['user_session'] = $row['idDonatur'];
}else{
echo "Email or Password is wrong...!!!!";
}
}
mysql_close ($connection); // Connection Closed.
?>