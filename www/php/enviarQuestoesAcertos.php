<?php
	$acertos=$_POST['acertos'];
	$conexao=mysql_connect("localhost","root","");
	mysql_select_db("e2p");	
	mysql_query("INSERT INTO usuarios (acertos) VALUES (".$acertos.")");
	mysql_close($conexao);
?>
