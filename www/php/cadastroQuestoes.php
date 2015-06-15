<html>
<body>
	<?php
		$questao_texto=$_GET['questao_texto'];
		$questao_corpo=$_GET['questao_corpo'];
		$alternativa=$_GET['alternativa'];
		$materia=$_GET['materia'];
		$nivel=$_GET['nivel'];
		$ultimo_insert;
		$conexao=mysql_connect("localhost","root","");
		mysql_select_db("e2p");
		$resultado=mysql_query("INSERT INTO questoes VALUES"."'".$questao_texto."','".$nivel."','".$materia."'");
		$ultimo_insert=$conexao->insert_id;
		$resultado=mysql_query("INSERT INTO opcoes VALUES"."'".$questao_corpo."','".$alternativa."','".$ultimo_insert."'");
	?>
</body>
</head>
