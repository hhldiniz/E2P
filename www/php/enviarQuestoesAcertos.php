<?php
	
	$conexao=mysql_connect("localhost","root","");
	mysql_select_db("e2p");	

	$usuario = $_POST['usuario'];
    $totalq = $_POST['totalQ'];
    $totalac= $_POST['totalAc'];
    $totalqmat = json_decode($_POST['totalmat']);
    $acertosmat = json_decode($_POST['acertosmat']);


    $sql = "UPDATE estatisticas SET acertos_geral = acertos_geral+".$totalac."";
    $sql .= ",total_questoes = total_questoes + ".$totalq."";

    $sql .= ",total_mat = total_mat + ".$totalqmat->mat."";
    $sql .= ",total_geo = total_geo + ".$totalqmat->geo."";
    $sql .= ",total_hist = total_hist + ".$totalqmat->hist."";
    $sql .= ",total_port = total_port + ".$totalqmat->port."";
    $sql .= ",total_quim = total_quim + ".$totalqmat->quim."";

    $sql .= ",acertos_mat = acertos_mat + ".$acertosmat->mat."";
    $sql .= ",acertos_geo = acertos_geo + ".$acertosmat->geo."";
    $sql .= ",acertos_hist = acertos_hist + ".$acertosmat->hist."";
    $sql .= ",acertos_port = acertos_port + ".$acertosmat->port."";
    $sql .= ",acertos_quim = acertos_quim + ".$acertosmat->quim."";

    $sql .= "WHERE user=".$usuario."";

	//mysql_query($sql);
	echo $sql;
	mysql_close($conexao);
?>
