<html>
	<head></head>
<body>
	<?php
		$matricula=$_POST['matricula'];
	        $senha=$_POST['senha'];
		$nome=$_POST['nome'];
		$sobrenome=$_POST['sobrenome'];
		$email=$_POST['email'];
		$conexao = mysql_connect("localhost","root","");
           	mysql_select_db("e2p");
		$sql_string="INSERT INTO usuarios VALUES("."'".$matricula."','".$senha."','".$nome."','".$sobrenome."','".$email."')";
		$resultado =  mysql_query($sql_string) or die(mysql_error());
		mysql_close($conexao);
	?>
</body>
</html>
