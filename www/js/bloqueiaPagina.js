$(document).ready(function(){
	if(localStorage.getItem("usuario")==null || $.now()-localStorage.getItem("hora_login")>=1800000) //numero equivale a 30min em milisegundos
	{
		$(location).attr("href","http://localhost/E2P/www/bloqueio.html");
	}
$("head").append("<link rel='icon' href='imagens/favicon.ico' type='image/x-icon'>"); //isso não deveria estar aqui, foi apenas para economizar trabalho de colocar essa linha em cada um dos arquivos. Essa linha apenas adiciona o favicon em todas as página
});
