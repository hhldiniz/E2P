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
           //  ajaxSelectOpt(return_data);
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

function ajaxSelectOpt(json){
console.log(json[0]);
    
   var url = "partida.php";
    var id = json[0].id;
    var vars = "id="+id;
    hr.open("POST", url, true);
    // Set content type header information for sending url encoded variables in the request
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
            return_data = $.parseJSON(return_data);
			$("body").append(return_data[0].content); //gambiarra para contornar problema indescritivel com javascript
		   // alert("Cadastro Concluido");
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    document.getElementById("site").innerHTML = "processing...";	
        }
    
