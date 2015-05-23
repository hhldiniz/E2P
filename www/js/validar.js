$(document).ready(function(){ 
     $("input").blur(function(){
     if($(this).val() == "")
         {
             $(this).css({"border" : "1px solid #F00", "padding": "2px"});
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