$(document).ready(function(){
	if(localStorage.getItem("usuario")==null || $.now()-localStorage.getItem("hora_login")>=1800000) //numero equivale a 30min em milisegundos
	{
		$(location).attr("href","http://localhost/E2P/www/bloqueio.html");
	}
});
