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

		$matricula=preg_replace('/[^[:alnum:]_]/', '',$matricula);;
	    	$senha=preg_replace('/[^[:alnum:]_]/', '',$senha);;
		$nome=preg_replace('/[^[:alnum:]_]/', '',$nome);;
		$sobrenome=preg_replace('/[^[:alnum:]_]/', '',$sobrenome);;
		$usuario=preg_replace('/[^[:alnum:]_]/', '',$usuario);;
		$email=preg_replace('/[^[:alnum:]_]/', '',$email);;



		$conexao = mysql_connect("localhost","root","");
           	mysql_select_db("e2p");
		$sql_string="INSERT INTO usuarios (nome,sobrenome,usuario,email,matricula,senha) VALUES ('".$nome."','".$sobrenome."','".$usuario."','".$email."','".$matricula."','".$senha."')";
		$sql_string_aux="INSERT INTO estatisticas (user) VALUES('".$usuario."')";
		$resultado =  mysql_query($sql_string) or die(mysql_error());
		$resultado2=mysql_query($sql_string_aux) or die(mysql_error());
        if($resultado && $resultado2)
        {
            	    header("location: http://localhost/E2P/www/index.html");
        }
                mysql_close($conexao);
	?>
</body>
</html>
