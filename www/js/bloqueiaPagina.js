$(document).ready(function(){
	if(localStorage.getItem("usuario")==null && $.now()-localStorage.getItem("hora_login")>=1800000) //numero equivale a 30min em milisegundos
	{
		$(document.window.href).attr("href","bloqueio.html");
	}
});
