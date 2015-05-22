<?php
	
	$conexao=mysql_connect("localhost","root","");
	mysql_select_db("e2p");	

	$usuario = json$_POST['usuario'];
    $totalq = $_POST['totalQ'];
    $totalac= $_POST['totalAc'];
    $totalqmat = $_POST['totalmat'];
    $acertosmat = $_POST['acertosmat'];


    $sql = "INSERT INTO estatisticas (acertos_geral,total_questoes";


	mysql_query();
	mysql_close($conexao);
?>
