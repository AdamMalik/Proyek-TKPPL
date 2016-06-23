<?php
include('koneksi.php');
$a=$_POST["name1"];
$b=$_POST["email1"];
$c=$_POST["passwordDaftar"];
$d=$_POST["alamat1"];
$e=$_POST["kota1"];
$f=$_POST["provinsi1"];
$query=mysql_query("Select * from donatur");
$n=mysql_num_rows($query);
$id="D00".($n+1);
$simpan=mysql_query("INSERT INTO donatur VALUES ('$id', '$a', '$b', '$c', '$d', '$e', '$f', '', '');");
if($simpan){
    header("Location: index.html");    
}
?>