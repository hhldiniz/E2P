$(document).ready(function(){ 
     $("input").blur(function(){
     if($(this).val() == "")
         {
             $(this).css({"border" : "1px solid #F00", "padding": "2px"});
         }
    });
    if(localStorage.getItem('usuario')!=null)
    {
        
    }
    $("#permanecer").click(function(){
	if($(this).is(':checked'))
	{
		$.localStorage('usuario',$('#usuario').val());
		$.localStorage('senha',$('#senha').val());
	}
	else
	{
		$.localStorage('usuario',null);
		$.localStorage('senha',null);
	}
});
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
