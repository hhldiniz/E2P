$(document).ready(function(){
	$("#sair").click(function(){
		localStorage.setItem("usuario", null);
		location.href="http://localhost/E2P/www/";
	});
	$("#foguete").click(function(){
		location.href="http://localhost/E2P/www/home.html";
	});
	$("#joystick").click(function(){
		location.href="http://localhost/E2P/www/partida.html";
	});
	$("#estrela").click(function(){
		location.href="http://localhost/E2P/www/insignias.html";
	});
	$("#estatistica").click(function(){
		location.href="http://localhost/E2P/www/estatisticas.html";
	});
	$("#coroa").click(function(){
		location.href="http://localhost/E2P/www/ranking.html";
	});
	$("#concluir").click(function(){
		if($("input:radio[name='alternativas']").is(':checked')){
				ajaxCadastraQuestao();
			}
			else{
			alert("Seleciona uma opção");}

	});
    });
	
