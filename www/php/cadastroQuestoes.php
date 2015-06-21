
	<?php
		
		$questao_texto=$_POST['questao_texto'];
		$opcoes = $_POST['opcoes'];
		$materia=$_POST['materia'];
		$nivel=$_POST['nivel'];

        $opcoes = json_decode($opcoes);

		$conexao=mysql_connect("localhost","root","");
		mysql_select_db("e2p");
        
        $sql2 = "INSERT INTO opcoes(content, right_answer, question_id)
        VALUES ";

        foreach ($opcoes as &$value) {
            $sql2 .= "( '".$value->content."', '".$value->right_answer."', LAST_INSERT_ID() ),";
        }
            $sql2 .="()";
                

		$resultado=mysql_query("INSERT INTO questoes VALUES"."'".$questao_texto."','".$nivel."','".$materia."'");
		$resultado2=mysql_query($sql2);
		if($resultado && $resultado2)
		{
			echo("1");
		}
		else
		{
			echo("0");
		}
		mysql_close($conexao);
	?>
