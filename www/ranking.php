<?php
	
			header('Content-Type: text/html; charset=utf-8');
            $conexao = mysql_connect("localhost","root","");
            mysql_set_charset('utf8', $conexao);
            mysql_select_db("e2p");


            $resultado =  mysql_query("select nome,usuario,acertos from usuarios order by acertos desc limit 10") or die(mysql_error());
		  
		  if(mysql_num_rows($resultado) > 0)
		   {
               $retorno = array();
			 while($row = mysql_fetch_assoc($resultado)) {
                 $retorno[] = $row;
                 
           
            }
               echo json_encode($retorno);
            mysql_close($conexao);
              		
            }	
			else
            {
			 echo "Erro com o banco de questoes!";
			 mysql_close($conexao);
            }


?>