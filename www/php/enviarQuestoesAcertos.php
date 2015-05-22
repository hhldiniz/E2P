<?php
	
	$conexao=mysql_connect("localhost","root","");
	mysql_select_db("e2p");	

	$usuario = $_POST['usuario'];
    $totalq = $_POST['totalQ'];
    $totalac= $_POST['totalAc'];
    $totalqmat = json_decode($_POST['totalmat']);
    $acertosmat = json_decode($_POST['acertosmat']);


    $sql = "INSERT INTO estatisticas (acertos_geral,total_questoes";


	mysql_query();
	mysql_close($conexao);
?>
