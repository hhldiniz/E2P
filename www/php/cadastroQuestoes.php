<html>
<body>
	<?php
		$questao_titulo=$_GET['questao_titulos'];
		$questao_texto=$_GET['questao_texto'];
		$alternativa=$_GET['alternativa'];
		$materia=$_GET['materia'];
		$nivel=$_GET['nivel'];
		$conexao=mysql_connect("localhost","root","");
		mysql_select_db("e2p");
		$resultado=mysql_query("INSERT INTO questoes VALUES"."'".$questao_texto."','".$nivel."','".$materia."'");
		$resultado2=mysql_query("INSERT INTO opcoes VALUES"."'".);
		if($resultado && $resultado2)
		{
			echo("1");
		}
		else
		{
			echo("0");
		}
		mysql_close($conexao);
	?>
</body>
</head>
