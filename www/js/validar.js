$(document).ready(function(){
    $("input").blur(function(){
     if($(this).val() == "")
         {
             $(this).css({"border" : "1px solid #F00", "padding": "2px"});
         }
    });
    $("#botao").click(function(){
     var cont = 0;
        
        if($("#senha2").val() != $("#senha").val()){
            $("#senha2").css({"border" : "1px solid #F00", "padding": "2px"});
            cont++;
        }
        
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