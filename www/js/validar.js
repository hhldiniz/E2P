$(document).ready(function(){ 
     $("input").blur(function(){ //adiciona borda vermelha quando campo é deixado em branco
     if($(this).val() == "")
         {
             $(this).css({"border" : "1px solid #F00", "padding": "2px"});
         }
	else
		$(this).css({"border": "1px solid #888"});
    });
    $("#botao_cadastrar").click(function(){ //usando expressão regular para validar o email pois o html5 está deixando passar
	var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	if(!filtro.test($("#email").val()))
	{
		$("#email").blur(function(){
			$(this).css({"border" : "1px solid #F00", "padding": "2px"});
		});
	}
	else
	$(this).css({"border": "1px solid #888"});
	});
    if(localStorage.getItem('usuario')!=null) //verifica o localStorage por usuário e deixa passar apenas quando o usuário existe
    {
        $("document.window.location").attr("href","http://localhost/home.html");
    }

    $("#botao").click(function(){
     var cont = 0;
     $("#form input").each(function(){

         if($(this).val() == "")
             {
                 $(this).css({"border" : "1px solid #F00", "padding": "2px"});
                 cont++;
             }
	else
	$(this).css({"border": "1px solid #888"});
        });
     if(cont == 0)
         {
             $("#form").submit();
         }
    });
    

});
