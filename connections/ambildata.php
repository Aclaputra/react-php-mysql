<?php
	
	include 'conn.php';
	
	$sql = $conn->query("SELECT * FROM produk");
	$result = array();
	
	while($data=$sql->fetch_assoc()){
		$result[] = $data;
	}
	
	echo json_encode($result);
	
	mysqli_close($conn);

?>
