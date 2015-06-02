$(document).ready(function(){
	$("#sair").click(function(){
		localStorage.setItem("usuario",null);
		location.href="http://localhost/E2P/www/";
});
	$(".icone_menu joystick").click(function(){
		location.href="http://localhost/E2P/www/html/partida.html";
});
	$(".icone_menu estrela").click(function(){
		location.href="http://localhost/E2P/www/html/insignias.html";
});
	$(".icone_menu estatistica").click(function(){
		location.href="http://localhost/E2P/www/html/estatisticas.html";
});
	$(".icone_menu coroa").click(function(){]
		location.href="http://localhost/E2P/www/html/ranking.html";
});
});
