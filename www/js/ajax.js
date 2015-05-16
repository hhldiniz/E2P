var hr = new XMLHttpRequest();

function httpRequestCreate(method,url){
    hr.open(method,url,true);    
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");    
}
  
  function ajax_post(){

    if($("#usuario").val() != "" && $("#senha").val() != ""){

    var fn = document.getElementById("usuario").value;
    var ln = document.getElementById("senha").value;
    var vars = "usuario="+fn+"&senha="+ln;
        
    httpRequestCreate("POST","login.php");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
			document.getElementsByTagName("body")[0].innerHTML = return_data;
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    document.getElementById("site").innerHTML = "processing...";
    
    }else{
        $("#status").text("Usuario e/ou senha não foram digitadas!");
    }


}
 function ajax_sessao(usuario,senha) //função para ser chamada apenas quando o usuário e senha são obtidos da sessão do navegador
{

	var vars = "usuario="+usuario+"&senha="+senha;
    
    httpRequestCreate("POST","login.php");
	hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
			document.getElementsByTagName("body")[0].innerHTML = return_data;
	    }
        else
        {
        $("#status").text("Usuario e/ou senha não foram digitadas!");
    }

    
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    document.getElementById("site").innerHTML = "processing...";
    
    }
}
function ajax_cadastro()
{
    
    if($("#senha2").val() != $("#senha").val())
    {
            $("#senha2").css({"border" : "1px solid #F00", "padding": "2px"});
             $("#senha").css({"border" : "1px solid #F00", "padding": "2px"});
            document.getElementById("status").innerHTML = "Senhas não coincidem!";
            
        }
    else
        {



    var fn = document.getElementById("matricula").value;
    var ln = document.getElementById("senha").value;
    var email=document.getElementById("email").value;
    var nome=document.getElementById("nome").value;
    var sobrenome=document.getElementById("sobrenome").value;
    var usuario=document.getElementById("usuario").value;
    var vars = "matricula="+fn+"&senha="+ln+"&email="+email+"&nome="+nome+"&sobrenome="+sobrenome+"&usuario="+usuario;
    
    httpRequestCreate("POST","cadastro.php");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
			document.getElementsByTagName("body")[0].innerHTML = return_data; //gambiarra para contornar problema indescritivel com javascript
		   // alert("Cadastro Concluido");
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    document.getElementById("site").innerHTML = "processing...";	
        }
        }


function ajaxSelectQuest()
{
    

    // Create some variables we need to send to our PHP file

    var materias = [];
    materias = $('input:checkbox:checked.subjects').map(function () {
      switch (this.value){
        case "mat":
            return 1;
            break;
        case "geo":
            return 2;
            break;
        case "hist":
            return 3;
            break;
        case "port":
            return 4;
            break;
        case "quim":
            return 5;
            break;

      }
}).get();
console.log(materias);
    var dific;
    dific = $("input:radio[name=dificulty]:checked").val();
    
    switch(dific){
        case "facil":
            dific=1;
            break;
        case "medio":
            dific=2;
            break;
        case "dificil":
            dific=3;
            break;
    }
    
    console.log(dific);

    //var vars = "materias="+JSON.stringify(materias);
    var vars = "dific="+dific;
    //adicionando materias ao post se foram selecionadas
    if(materias.length>0){ vars+="&materias="+JSON.stringify(materias)}

    httpRequestCreate("POST","partida.php");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() 
    {
	    if(hr.readyState == 4 && hr.status == 200) 
        {
		    var return_data = hr.responseText;
            return_data = $.parseJSON(return_data);
			document.getElementById("site").innerHTML = return_data[0].titulo; //gambiarra para contornar problema indescritivel com javascript

            //document.getElementById("site").innerHTML = return_data;
            
		   //return return_data;
           
            ajaxSelectOpt(return_data[0].id);
            
            // alert("Cadastro Concluido");
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
     document.getElementById("status").innerHTML = "processing...";	       
}


// function ajaxInsereQuestao()
// {
//     var aux=document.getElementsByClass("questoes")[1];
//     alert(aux);
// }

function ajaxSelectOpt(id){
    
    
    httpRequestCreate("POST","opcoes.php");
    
    var vars = "id="+id;
    
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
            
		    var return_data = hr.responseText;
            return_data = $.parseJSON(return_data);
            var html = "<br>";
            
            for(var i=0;i<return_data.length;i++){
              html +=  '<input type="radio" name="answer" value="'+return_data[i].right_answer+'"> '+return_data[i].content+"<br>";
            }
			$("#site").append(html); //gambiarra para contornar problema indescritivel com javascript
		   // alert("Cadastro Concluido");
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    //document.getElementById("status").innerHTML = "processing...";	
        }
    
function ajaxCadastroQuestao(texto, alt1,alt2,alt3,alt4,alt5)
{   
    
    httpRequestCreate("GET","cadastroQuestoes.php");
	var vars="questao_texto="+texto+"&alternativa1="+alt1+"&alternativa2="+alt2+"&alternativa3="+alt3+"&alternativa4="+alt4+"&alternativa5="+alt5;
	hr.onreadystatechange=function(){
		if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
			document.getElementsByTagName("body")[0].innerHTML = return_data;
}
hr.send(vars);
}
}
