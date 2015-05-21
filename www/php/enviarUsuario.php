<?php
	$usuario=$_POST['usuario'];
	$conexao=mysql_connect("localhost","root","");
	mysql_select_db("e2p");	
	mysql_query("INSERT INTO usuarios (acertos) VALUES (".$usuario.")");
	mysql_close($conexao);
?>
