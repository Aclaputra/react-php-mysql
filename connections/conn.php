<?php
	
	$conn = new mysqli("localhost","root","","toko");
	
	if($conn->connect_error){
		die("koneksi gagal");
	}

?>
