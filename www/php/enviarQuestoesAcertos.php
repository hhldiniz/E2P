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
    
    $sql .= ",total_ing = total_ing + ".$totalqmat->ing."";
    $sql .= ",total_esp = total_esp + ".$totalqmat->esp."";
    $sql .= ",total_soc = total_soc + ".$totalqmat->soc."";
    $sql .= ",total_fil = total_fil + ".$totalqmat->fil."";
    $sql .= ",total_fis = total_fis + ".$totalqmat->fis."";
    $sql .= ",total_bio = total_bio + ".$totalqmat->bio."";


    $sql .= ",acertos_mat = acertos_mat + ".$acertosmat->mat."";
    $sql .= ",acertos_geo = acertos_geo + ".$acertosmat->geo."";
    $sql .= ",acertos_hist = acertos_hist + ".$acertosmat->hist."";
    $sql .= ",acertos_port = acertos_port + ".$acertosmat->port."";
    $sql .= ",acertos_quim = acertos_quim + ".$acertosmat->quim."";

    $sql .= ",acertos_ing = acertos_ing + ".$acertosmat->ing."";
    $sql .= ",acertos_esp = acertos_esp + ".$acertosmat->esp."";
    $sql .= ",acertos_soc = acertos_soc + ".$acertosmat->soc."";
    $sql .= ",acertos_fil = acertos_fil + ".$acertosmat->fil."";
    $sql .= ",acertos_fis = acertos_fis + ".$acertosmat->fis."";
    $sql .= ",acertos_bio = acertos_bio + ".$acertosmat->bio."";

    $sql .= " WHERE user='".$usuario."'";

	mysql_query($sql);
	//echo $sql;
	mysql_close($conexao);
?>
