<html>
        <body>
    <?php
            $usuario=$_POST['usuario'];
            $senha=$_POST['senha'];

            $usuario = preg_replace('/[^[:alnum:]_]/', '',$usuario);
            $senha = preg_replace('/[^[:alnum:]_]/', '',$senha);

            $conexao = mysql_connect("localhost","root","");
            mysql_select_db("e2p");
           $resultado =  mysql_query("select * from usuarios where usuario='$usuario' and senha='$senha'") or die(mysql_error());
		   if(mysql_num_rows($resultado) > 0)
		   {
			mysql_close($conexao);
              		header("location: http://localhost/E2P/www/home.html");
		   }	
			else
            {
			 echo "Usuario/Senha nao foi encontrado";
			 mysql_close($conexao);
            }
        ?>
        </body>
</html>
