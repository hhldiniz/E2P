<html>
        <body>
    <?php
          header('Content-Type: text/html; charset=utf-8');
            $conexao = mysql_connect("localhost","root","");
            mysql_set_charset('utf8', $conexao);
            mysql_select_db("e2p");
           $resultado =  mysql_query("select id,titulo from questoes") or die(mysql_error());
           // mysql_close($conexao);
		   if(mysql_num_rows($resultado) > 0)
		   {
			//echo "1";
			//var_dump(http_response_code());
			 while($row = mysql_fetch_assoc($resultado)) {
        echo "id: " . $row["id"]. " - Name: " . $row["titulo"].  "<br>";
    }
               
               mysql_close($conexao);
              		
            }	
		//	else
          //  {
		//	 echo "Usuario/Senha nao foi encontrado";
		//	 mysql_close($conexao);
         //   }
        ?>
        </body>
</html>
