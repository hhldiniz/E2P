$(document).ready(function(){
	if(localStorage.getItem("usuario")==null)
	{
		$(document.window.href).attr("href","bloqueio.html");
	}
});
