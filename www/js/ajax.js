

var hr = new XMLHttpRequest();



function httpRequestCreate(method,url){
    hr.open(method,url,true);    
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");    
}
  
  function ajax_post(){
    if($("#usuario").val() != "" && $("#senha").val() != ""){
    var fn = $("#usuario").val();
    localStorage.setItem("usuario",fn);  //aproveita o momento do click para o login e envia o nome de usuário para o armazenamento local
    var ln = $("#senha").val();
    var vars = "usuario="+fn+"&senha="+ln;
        
    httpRequestCreate("POST","php/login.php");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
            return_data = Number(return_data);
            
			if(return_data>0){
		localStorage.setItem("hora_login",$.now()); //salva no localStorage a hora em que o login foi realizado
                window.location.href="home.html";
            }else{
                $("#status").html("Usuario e/ou senha incorreta(s)!");
            }
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    $("#status").html("processing...");
    
    }else{
        $("#status").text("Usuario e/ou senha não foram digitadas!");
    }


}
 function ajax_sessao(usuario,senha) //função para ser chamada apenas quando o usuário e senha são obtidos da sessão do navegador
{

	var vars = "usuario="+usuario+"&senha="+senha;
    
    httpRequestCreate("POST","php/login.php");
	hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
			$("#status").html(return_data);
	    }
        else
        {
        $("#status").text("Usuario e/ou senha não foram digitadas!");
    }

    
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    $("#site").html("processing...");
    
    }
}
function ajax_cadastro() //função ajax para cadastro do usuário
{
    
    if($("#senha2").val() != $("#senha").val())
    {
            $("#senha2").css({"border" : "1px solid #F00", "padding": "2px"});
             $("#senha").css({"border" : "1px solid #F00", "padding": "2px"});
            $("#status").html("Senhas não coincidem!");
            
        }
    else
        {



    var fn = $("#matricula").val();
    var ln = $("#senha").val();
    var email=$("#email").val();
    var nome=$("#nome").val();
    var sobrenome=$("#sobrenome").val();
    var usuario=$("#usuario").val();
    var vars = "matricula="+fn+"&senha="+ln+"&email="+email+"&nome="+nome+"&sobrenome="+sobrenome+"&usuario="+usuario;
    
    httpRequestCreate("POST","php/cadastro.php");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
			if(Number(return_data)>0){
		      window.location.href = "index.html"
        	alert("Cadastro realizado");
        }else{
            $("#status").html("Erro no cadastro de usuario!");
        }
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    $("#status").html("processing...");	
        }
        }



function ajaxCadastraQuestao() //função para cadastro da questão
{
	 httpRequestCreate("GET","php/cadastroQuestoes.php");
	var questao_texto=$("#questao_texto").val();
	var alternativa=$("#alternativa").val();
	var nivel=$("#nivel").val();
	var materia=$("#materia").val();
	var vars="questao_texto="+questao_texto+"&alternativa="+alternativa+"&nivel="+nivel+"&materia="+materia;
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
			if(Number(return_data)>0){
        	alert("Questão cadastrada!");
	    }
		else
		console.log("Erro ao cadastrar a questão");
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    $("#status").html("processing...");	
}
}

