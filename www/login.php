<html>
        <body>
    <?php
          $matricula=$_POST['matricula'];
            $senha=$_POST['senha'];
          //  $email=$_POST['email'];
           // $nome=$_POST['nome'];
            //echo "opa";
          //  echo("<script>alert("+$nome+")</script>");
          //  echo($nome);
            $conexao = mysql_connect("localhost","root","");
            mysql_select_db("e2p");
           $resultado =  mysql_query("select * from usuarios where matricula='$matricula' and senha='$senha'") or die(mysql_error());
           // mysql_close($conexao);
		   if(mysql_num_rows($resultado) > 0)
		   {
			echo "1";
			//var_dump(http_response_code());
			mysql_close($conexao);
		   }	
			
			else
			echo "0";
			mysql_close($conexao);
		   
        ?>
        </body>
</html>
