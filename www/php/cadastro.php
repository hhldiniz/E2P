<html>
	<head></head>
<body>
	<?php
		$matricula=$_POST['matricula'];
	    $senha=$_POST['senha'];
		$nome=$_POST['nome'];
		$sobrenome=$_POST['sobrenome'];
		$usuario=$_POST['usuario'];
		$email=$_POST['email'];
		$conexao = mysql_connect("localhost","root","");
           	mysql_select_db("e2p");
		$sql_string="INSERT INTO usuarios VALUES "."('".$nome."','".$sobrenome."','".$usuario."','".$email."','".$matricula."','".$senha."')";
		$resultado =  mysql_query($sql_string) or die(mysql_error());
        if($resultado)
        {
            	    header("location: http://localhost/E2P/www/index.html");
		    mysql_close($conexao);
        }
            else
                mysql_close($conexao);
	?>
</body>
</html>