var hr = new XMLHttpRequest();
  
  function ajax_post(){

    if($("#usuario").val() != "" && $("#senha").val() != ""){

    // Create our XMLHttpRequest object
    // Create some variables we need to send to our PHP file
    var url = "login.php";
    var fn = document.getElementById("usuario").value;
    var ln = document.getElementById("senha").value;
    var vars = "usuario="+fn+"&senha="+ln;
    hr.open("POST", url, true);
    // Set content type header information for sending url encoded variables in the request
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
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

	var url="login.php"
	var vars = "usuario="+usuario+"&senha="+senha;
	hr.open("POST",url,true);
	hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
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
    
	 // Create our XMLHttpRequest object
    // Create some variables we need to send to our PHP file
    var url = "cadastro.php";
    var fn = document.getElementById("matricula").value;
    var ln = document.getElementById("senha").value;
    var email=document.getElementById("email").value;
    var nome=document.getElementById("nome").value;
    var sobrenome=document.getElementById("sobrenome").value;
    var usuario=document.getElementById("usuario").value;
    var vars = "matricula="+fn+"&senha="+ln+"&email="+email+"&nome="+nome+"&sobrenome="+sobrenome+"&usuario="+usuario;
    hr.open("POST", url, true);
    // Set content type header information for sending url encoded variables in the request
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
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
    var url = "partida.php";
    
  
    hr.open("GET", url, true);
    // Set content type header information for sending url encoded variables in the request
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() 
    {
	    if(hr.readyState == 4 && hr.status == 200) 
        {
		    var return_data = hr.responseText;
            return_data = $.parseJSON(return_data);
			document.getElementById("site").innerHTML = return_data[0].titulo; //gambiarra para contornar problema indescritivel com javascript

		   //return return_data;
             ajaxSelectOpt(return_data[0].id);
            // alert("Cadastro Concluido");
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(); // Actually execute the request
     document.getElementById("status").innerHTML = "processing...";	       
}


// function ajaxInsereQuestao()
// {
//     var aux=document.getElementsByClass("questoes")[1];
//     alert(aux);
// }

function ajaxSelectOpt(id){
    
   var url = "opcoes.php";
    var vars = "id="+id;
    hr.open("POST", url, true);
    // Set content type header information for sending url encoded variables in the request
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
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
	var url="cadastroQuestoes.php";
	var vars="questao_texto="+texto+"&alternativa1="+alt1+"&alternativa2="+alt2+"&alternativa3="+alt3+"&alternativa4="+alt4+"&alternativa5="+alt5;
	hr.open("GET",url,true);
	hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	hr.onreadystatechange=function(){
		if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
			document.getElementsByTagName("body")[0].innerHTML = return_data;
}
hr.send(vars);
}
}
