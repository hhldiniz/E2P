<html>
<body>
	<?php
		$questao_texto=$_GET['questao_texto'];
		$alternativa=$_GET['alternativa'];
		$nivel=$_GET['nivel'];
		$materia=$_GET['materia'];
		$conexao=mysql_connect("localhost","root","");
		mysql_select_db("e2p");
		mysql_query("INSERT INTO questoes VALUES"."'".$questao_texto."','".$nivel."','".$materia."'");
		mysql_close($conexao);
	?>
</body>
</head>
