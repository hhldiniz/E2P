$(document).ready(function(){ 
     $("input").blur(function(){
     if($(this).val() == "")
         {
             $(this).css({"border" : "1px solid #F00", "padding": "2px"});
         }
    });
    $("#botao_cadastrar").click(function(){
	var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	if(!filtro.test($("#email").val()))
	{
		$("#email").blur(function(){
			$(this).css({"border" : "1px solid #F00", "padding": "2px"});
		});
	}
	});
    if(localStorage.getItem('usuario')!=null)
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
        });
     if(cont == 0)
         {
             $("#form").submit();
         }
    });
    

});
