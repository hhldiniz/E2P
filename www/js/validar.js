$(document).ready(function(){ 
     $("html").attr("lang","pt"); //define a linguagem trabalhada no html
     $("head").append("<script src='jquery.validate.min.js'></script>"); //plugin adicionado posteriormente, para polpar trabalho, está sendo adicionado via código
     $("input").attr("spellcheck","true");//habilita spellcheck para input
     $("textarea").attr("spellcheck","true");//habilita spellcheck para textarea
     $("input").blur(function(){ //adiciona borda vermelha quando campo é deixado em branco
     if($(this).val() == "")
         {
             $(this).css({"border" : "1px solid #F00", "padding": "2px"}); //altera a cor ao redor do campo
         }
	else
		$(this).css({"border": "1px solid #888"}); //tb altera a cor caso aconteça o contrário da condição acima
    });
    $("textarea").blur(function(){
	if(this.val().toString().lenght()<=10){ //verifica se o usuário digitou um texto muito pequeno
		$(this).css({"border" : "1px solid #F00", "padding": "2px"});}
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