    <?php

        if(isset($_POST['usuario']) && isset($_POST['senha'])){
            $usuario=$_POST['usuario'];
            $senha=$_POST['senha'];

            $usuario = preg_replace('/[^[:alnum:]_]/', '',$usuario);
            $senha = preg_replace('/[^[:alnum:]_]/', '',$senha);

            $conexao = mysql_connect("localhost","root","");
            mysql_select_db("e2p");
           $resultado =  mysql_query("select * from usuarios where usuario='$usuario' and senha='$senha'") or die(mysql_error());
		   if(mysql_num_rows($resultado) > 0)
		   {
			
              		echo 1;
                    mysql_close($conexao);
		   }	
			else
            {
			 echo 0;
			 mysql_close($conexao);
            }

        }

        ?>
