

	var hr = new XMLHttpRequest();

	function httpRequestCreate(method,url){
	    hr.open(method,url,true);    
	    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");    
	}
  

	var questoes;
    var questCont=0;
    var estatisticas={mat: 0, geo: 0, hist: 0, port: 0, quim: 0, bio: 0,fis: 0};
    var estaAcertos={mat: 0, geo: 0, hist: 0, port: 0, quim: 0, bio: 0,fis: 0};
	var cont = 0;
	
	function ajaxSelectQuest(){


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
        case "fis":
            return 11;
            break;
        case "bio":
            return 12;
            break;

      }
}).get();

    console.log("Materias: "+materias);


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
    
    console.log("Dificuldade: "+dific);

    var nquest = Number($("#nQuest").val());

    tempo = nquest *(150);

    console.log("Numero de Questoes: "+nquest);

    //var vars = "materias="+JSON.stringify(materias);
    var vars = "dific="+dific+"&nquest="+nquest;
    //adicionando materias ao post se foram selecionadas
    if(materias.length>0){ vars+="&materias="+JSON.stringify(materias)}

    httpRequestCreate("POST","php/partida.php");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() 
    {
	    if(hr.readyState == 4 && hr.status == 200) 
        {
		    var return_data = hr.responseText;
            return_data = $.parseJSON(return_data);
            questoes = return_data;
			$("#ilustracao").html(return_data[0].titulo); //gambiarra para contornar problema indescritivel com javascript

            //document.getElementById("site").innerHTML = return_data;
            
		   //return return_data;
           
            ajaxSelectOpt(return_data[0].id);
            startCountdown();
            
            // alert("Cadastro Concluido");
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
     $("#status").html("processing...");	       
}


// function ajaxInsereQuestao()
// {
//     var aux=document.getElementsByClass("questoes")[1];
//     alert(aux);
// }

function ajaxSelectOpt(id){
    
    
    httpRequestCreate("POST","php/opcoes.php");
    
    var vars = "id="+id;
    
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
            
		    var return_data = hr.responseText;
            return_data = $.parseJSON(return_data);
            //shuffle(return_data);
            var html = "<br>";
            
            for(var i=0;i<return_data.length;i++){
              html +=  '<input type="radio" name="answer" id="op'+i+'" value="'+return_data[i].right_answer+'">'+
                  '<label for="op'+i+'">'+return_data[i].content+
                  '</label><br>';
            }
            html += '<button type="button" id="ans" onClick="checaQuestao()">responder</button>';
            html += '<br><div id="status"></div>';
			$("#ilustracao").append(html); //gambiarra para contornar problema indescritivel com javascript
		   // alert("Cadastro Concluido");
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    //$("#status").html("processing...");	
        }


function enviarQuestoesAcertos(esta,estaacertos,numquest,acertos)
{
	httpRequestCreate("POST","php/enviarQuestoesAcertos.php");
    var totalmat= JSON.stringify(esta);
    var acertosmat = JSON.stringify(estaacertos);
    var vars ="usuario="+localStorage.getItem("usuario")+"&totalQ="+numquest+"&totalAc="+acertos+
              "&totalmat="+totalmat+"&acertosmat="+acertosmat;
    
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
            
		    var return_data = hr.responseText;
            
            window.location.href = "home.html";
            
			//console.log(return_data); //gambiarra para contornar problema indescritivel com javascript
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    //$("#status").html("processing...");	
        }

function checaQuestao() {

    //Criando variavel se não existir
    //if(!questCont){var questCont=0;}
    //if(!estatisticas){var estatisticas={mat: 0, geo: 0, hist: 0, port: 0, quim: 0};}
    //if(!estaAcertos){var estaAcertos={mat: 0, geo: 0, hist: 0, port: 0, quim: 0};}

      //Testando se ha uma opção selecionada 
      if($('input:radio[name=answer]:checked').length>0){

            switch (questoes[cont].id_mate){
                case "1":
                    estatisticas.mat+=1;
                    break;
                case "2":
                    estatisticas.geo+=1;
                    break;
                case "3":
                    estatisticas.hist+=1;
                    break;
                case "4":
                    estatisticas.port+=1;
                    break;
                case "5":
                    estatisticas.quim+=1;
                    break;
                case "11":
                    estatisticas.fis+=1;
                    break;
                case "12":
                    estatisticas.bio+=1;
                    break;

          }

          //Testando se e certa  
          if($('input:radio[name=answer]:checked').val()== 1){
            questCont++;
                switch (questoes[cont].id_mate){
                    case "1":
                        estaAcertos.mat+=1;
                        break;
                    case "2":
                        estaAcertos.geo+=1;
                        break;
                    case "3":
                        estaAcertos.hist+=1;
                        break;
                    case "4":
                        estaAcertos.port+=1;
                        break;
                    case "5":
                        estaAcertos.quim+=1;
                        break;
                    case "11":
                        estatisticas.fis+=1;
                        break;
                    case "12":
                        estatisticas.bio+=1;
                        break;

                    }


            console.log(estaAcertos.port);
            console.log(questCont);

          }

          cont++;

          //Caso uma proxima questao exista mostra a proxima
          if(questoes[cont] != undefined){
          $("#site").html(questoes[cont].titulo);
          ajaxSelectOpt(questoes[cont].id);
		  
		  //Se ja não ha mais questões, a sessão acabou
		  }else{
				//É AQUI O LOCAL!!!!
				// o numero de questoes certas esta em localStorage.questCont , talvez isso mude
			enviarQuestoesAcertos(estatisticas,estaAcertos,cont,questCont);
                //VARIAVEIS IMPORTANTES
                
                //cont - Número de questões
                //questCont - Número toral de acertos

                //estatistica - Número de questoes de cada matéria
                //estaAcertos - Número de acertos de cada matéria
				
			}

      //Se nenhuma opção estiver selecionada alerta o usuario
      }else{
          $("#status").html("Selecione uma resposta");
      }

    }
