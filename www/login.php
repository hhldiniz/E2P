<html>
        <body>
    <?php
          $usuario=$_POST['usuario'];
            $senha=$_POST['senha'];
          //  $email=$_POST['email'];
           // $nome=$_POST['nome'];
            //echo "opa";
          //  echo("<script>alert("+$nome+")</script>");
          //  echo($nome);
            $conexao = mysql_connect("localhost","root","");
            mysql_select_db("e2p");
           $resultado =  mysql_query("select * from usuarios where usuario='$usuario' and senha='$senha'") or die(mysql_error());
           // mysql_close($conexao);
		   if(mysql_num_rows($resultado) > 0)
		   {
			//echo "1";
			//var_dump(http_response_code());
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
