$(document).ready(function(){
	$("#sair").click(function(){
		localStorage.setItem("usuario",null);
		$(document.window.location).attr("href","http://localhost/E2P/www/");
});
});