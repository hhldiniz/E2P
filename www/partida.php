<?php


          header('Content-Type: text/html; charset=utf-8');
            $conexao = mysql_connect("localhost","root","");
            mysql_set_charset('utf8', $conexao);
            mysql_select_db("e2p");

        $dificuldade = $_POST['dific'];
        $limiteQues = (int)$_POST['nquest'];
        
        $sql = "select id,titulo from questoes";

        if(isset($_POST['materias'])){
            $materia = json_decode(stripslashes($_POST['materias']));
            $sql .= " where id_mate in (";
            $i =0;
              foreach($materia as $m){
                  if($i>=1){
                    $sql .= ",";
                }
                 $i++;
                 $sql .= $m;
                
              }
            $sql .= ")";
        
        }

        $sql .= " limit ".$limiteQues."";

        /*
          select id, titulo from (
    select *
    from questoes
    where idNivel = 1
    limit 1) a
      union
      select id, titulo
      from (
    select *
     from questoes
    where idNivel = 2
     limit 1) b;
        */




            
     $resultado =  mysql_query($sql) or die(mysql_error());
         
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
