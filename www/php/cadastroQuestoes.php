    <?php
		
		$questao_texto=$_POST['questao_texto'];
		$opcoes = $_POST['opcoes'];
		$materia=$_POST['materia'];
		$nivel=$_POST['nivel'];

        $opcoes = json_decode($opcoes);

		$conexao=mysql_connect("localhost","root","");
		mysql_select_db("e2p");

        $sql = "INSERT INTO questoes(titulo,idnivel,id_mate) VALUES ( '".$questao_texto."',".$nivel.",".$materia." )";

        $sql2 = "INSERT INTO opcoes(content, right_answer, question_id) VALUES ";

            

		$resultado=mysql_query($sql);

        foreach ($opcoes as &$value) {
            $sql2 .= "( '".$value->content."', ".$value->right_answer.", ".mysql_insert_id()." ),";
        }

        $sql2 = substr($sql2,0, strlen($sql2)-1);
        $sql2.= "";

		$resultado2=mysql_query($sql2);
       
		if($resultado && $resultado2)
		{
            //echo($sql2);
			echo("1");
		}
		else
		{
            //echo($sql2);
			echo("0");
		}
		mysql_close($conexao);
	?>
