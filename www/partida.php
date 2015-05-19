<?php


          header('Content-Type: text/html; charset=utf-8');
            $conexao = mysql_connect("localhost","root","");
            mysql_set_charset('utf8', $conexao);
            mysql_select_db("e2p");

        $dificuldade = $_POST['dific'];
        $limiteQues = (int)$_POST['nquest'];
        
       /* $sql = "select id,titulo from questoes";

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
*/


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

           $sql1 = "select id,titulo from questoes where idNivel=".$dificuldade."";
           $sql2 = "select id,titulo from questoes where idNivel="
           $sql3 = "select id,titulo from questoes where idNivel="

           switch($dificuldade){
            case 1:
              $sql2 .=2;
              $sql3 .=3;
              break;
            case 2:
              $sql2 .=1;
              $sql3 .=3;
              break;
            case 3:
              $sql2 .=1;
              $sql3 .=2;
              break;
           }


           if(isset($_POST['materias'])){
            $materia = json_decode(stripslashes($_POST['materias']));
            $matQuery .= " and id_mate in (";
            $i =0;
              foreach($materia as $m){
                  if($i>=1){
                    $matQuery .= ",";
                }
                 $i++;
                 $matQuery .= $m;
                
              }
            $matQuery .= ")";
          
            $sql1 .= $matQuery;
            $sql2 .= $matQuery;
            $sql3 .= $matQuery;
        }

        $sql1 .= " limit ".$limiteQues/2."";
        $sql2 .= " limit ".round($limiteQues/4)."";
        $sql3 .= " limit ".round($limiteQues/4)."";

        $sql = "( ".$sql1." ) union ( ".$sql2." ) union ( ".$sql3." )"



            
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
