$(document).ready(function(){
	$("#sair").click(function(){
		localStorage.setItem("usuario",null);
		location.href="http://localhost/E2P/www/";
});
});
