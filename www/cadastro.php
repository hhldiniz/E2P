<html>
	<head></head>
<body>
	<?php
		$matricula="'".$_POST['matricula']."'";
	        $senha="'".$_POST['senha']."'";
		$conexao = mysql_connect("localhost","root","");
           	mysql_select_db("e2p");
		$aux=$matricula.$senha
		$resultado =  mysql_query("INSERT INTO usuarios VALUES(".$aux.")") or die(mysql_error());
		mysql_close($conexao);
	?>
</body>
</html>
