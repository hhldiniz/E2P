$.(document).ready(function(){
	$.("#concluir").click(function(){
		var questao_texto;
		var alternativa1;
		var alternativa2;
		var alternativa3;
		var alternativa4;
		var alternativa5;
		var count=retornaContador();
		while(count>=0)
		{
			questao_texto=$.("#questao_texto"+count).val();
			alternativa1=$.("#alternativa1"+count).val();
			alternativa2=$.("#alternativa2"+count).val();
			alternativa3=$.("#alternativa3"+count).val();
			alternativa4=$.("#alternativa4"+count).val();
			alternativa5=$.("#alternativa5"+count).val();
			ajaxCadastroQuestao(questao_texto,alternativa1,alternativa2,alternativa3,alternativa4,alternativa5);
			count--;
		}
)}
)};
