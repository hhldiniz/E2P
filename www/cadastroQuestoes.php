<html>
<body>
	<?php
		$questao_texto=$_GET['questao_texto'];
		$alternativa1=$_GET['alternativa1'];
		$alternativa2=$_GET['alternativa2'];
		$alternativa3=$_GET['alternativa3'];
		$alternativa4=$_GET['alternativa4'];
		$alternativa5=$_GET['alternativa5'];
		$conexao=mysql_connect("localhost","root","");
		mysql_select_db("e2p");
		$resultado=mysql_query("INSERT INTO questoes VALUES"."'".$questao_texto."','".$alternativa1."','".$alternativa2."','".$alternativa3."','".$alternativa4."','".$alternativa5."'");
	?>
</body>
</head>
