<?php
$connection = mysql_connect("localhost", "root", ""); // Establishing connection with server..
$db = mysql_select_db("apesbener", $connection); // Selecting Database.
$email=$_POST['email1']; // Fetching Values from URL.
$password= $_POST['password1']; // Password Encryption, If you like you can also leave sha1.
// check if e-mail address syntax is valid or not
$email = filter_var($email, FILTER_SANITIZE_EMAIL); // sanitizing email(Remove unexpected symbol like <,>,?,#,!, etc.)
if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
echo "Invalid Email.......";
}else{
// Matching user input email and password with stored email and password in database.
$result = mysql_query("SELECT * FROM tbl_users WHERE user_email='$email' AND user_password='$password'");
$data = mysql_num_rows($result);
if($data==1){
echo "Successfully Logged in...";

}else{
echo "Email or Password is wrong...!!!!";
}
}
mysql_close ($connection); // Connection Closed.
?>