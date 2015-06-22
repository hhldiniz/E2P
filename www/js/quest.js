$(function(){

$("input:button[name=callQuest]").click(function(event) {
    /* Act on the event */
    ajaxSelectQuest();
});



var display;
    var timer;
	var hr = new XMLHttpRequest();

	function httpRequestCreate(method,url){
        hr.open(method,url,true);
        hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");    
	}
  

	var questoes;
    var opcoes;
    var questCont=0;
    localStorage.sequences = 0;
    var estatisticas={mat: 0, geo: 0, hist: 0, port: 0, quim: 0, ing: 0, esp: 0, soc: 0, fil: 0, bio: 0,fis: 0};
    var estaAcertos={mat: 0, geo: 0, hist: 0, port: 0, quim: 0, ing: 0, esp: 0, soc: 0, fil: 0, bio: 0,fis: 0};
	var cont = 0;
	
	function ajaxSelectQuest(){

        window.onbeforeunload = function(){return "Todo o progresso dessa partida sera perdido ao sair antes de seu fim.";}


    var materias = [];
    materias = $('input:checkbox:checked.subjects').map(function () {
      switch (this.value){
        case "mat":
            return 1;
        case "geo":
            return 2;
        case "hist":
            return 3;
        case "port":
            return 4;
        case "quim":
            return 5;
        case "ing":
            return 6;
        case "esp":
            return 7;
        case "soc":
            return 9;
        case "fil":
            return 11;
        case "fis":
            return 11;
        case "bio":
            return 12;

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

    //tempo = nquest *(150);

    console.log("Numero de Questoes: "+nquest);

    //var vars = "materias="+JSON.stringify(materias);
    var vars = "dific="+dific+"&nquest="+nquest;
    //adicionando materias ao post se foram selecionadas
    if(materias.length>0){ vars+="&materias="+JSON.stringify(materias);}

    httpRequestCreate("POST","php/partida.php");
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() 
    {
        if(hr.readyState == 4 && hr.status == 200) 
        {
            var return_data = hr.responseText;
            return_data = $.parseJSON(return_data);
            questoes = return_data;

            var html = "<div id='barraSuperior'>"+
            "<a href='#'><img src='imagens/logo.png'></a>"+
            "</div>"+
            "<div id='barraTimer'>"+
        "<input type='button' class='botao' onclick='location.reload();' value='Sair'>"+
        "<div id='numeroQuestao'></div>"+
        "<div id='tempo'></div>"+
    "</div>"+
    "<div id='resolucao'>"+
        "<div id='enunciado'>"+
        "</div>"+
        "<div id='alternativas'>"+  
        "</div>"+
        "<div id='rodapeBotoes'>"+
            "<input type='button' class='botao' value='Pular' style='display: none !important;'> "+
            "<input type='button' class='botao' value='Confirmar' id='confirm'>"+
        "</div>"+
    "</div>";
    $("body").html(html);
    $("#confirm").click(function(event) {
    /* Act on the event */
    checaQuestao();
});

			$("#enunciado").html(return_data[0].titulo); //gambiarra para contornar problema indescritivel com javascript
            $("#numeroQuestao").html("1/"+return_data.length);
            //document.getElementById("site").innerHTML = return_data;
            
            //return return_data;
           
            ajaxSelectOpt(return_data[0].id);
            //startCountdown();
            display = document.querySelector('#tempo');
            timer = new CountDownTimer(nquest*150);
            timer.onTick(format).onTick(restart).onTick(ending).start();

             
            
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


$("#confirm").click(function(event) {
    /* Act on the event */
    checaQuestao();
});

function ajaxSelectOpt(id){
    
    
    httpRequestCreate("POST","php/opcoes.php");
    
    var vars = "id="+id;
    
    // Access the onreadystatechange event for the XMLHttpRequest object
    hr.onreadystatechange = function() {
        if(hr.readyState == 4 && hr.status == 200) {
            
            var return_data = hr.responseText;
            return_data = $.parseJSON(return_data);
            //shuffle(return_data);
            opcoes = return_data;

            var html="";
            var label = 'A';
            for(var i=0;i<return_data.length;i++){


                html+="<div class='alternativa'> <input type='radio' name='dificulty' value='"+label+"' id='"+i+"'><label for='"+i+"'>"+label+"</label>";
                html+="<div class='texto_alternativa'>"+return_data[i].content+"</div></div>";
                label = nextLetter(label);
             // html +=  '<input type="radio" name="answer" id="op'+i+'" value="'+return_data[i].right_answer+'">'+
              //    '<label for="op'+i+'">'+return_data[i].content+
                 // '</label><br>';
            }
           // html += '<button type="button" id="ans" onClick="checaQuestao()">responder</button>';
            //html += '<br><div id="status"></div>';
			$("#alternativas").html(html); //gambiarra para contornar problema indescritivel com javascript

            
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
            estatistics();
            checaNivel();
            checaConquistas();
            window.onbeforeunload = function(){};
           // window.location.href = "home.html";
            
			//console.log(return_data); //gambiarra para contornar problema indescritivel com javascript
        }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    //$("#status").html("processing...");	
        }

function estatistics(){
   // display = null;
   timer.stop();
   $("#tempo").html("");
    $("#resolucao").html("<p>Você fez "+cont+" Questoes e acertou "+questCont+". Clique em sair para retornar ao foguete</p>");
    $("#resolucao").append("<div id='grafico'>");

    $("#grafico").highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Numero de questões feitas e acertadas'
        },
        xAxis: {
            categories: [
                'Matemática',
                'Geografia',
                'História',
                'Português',
                'Química',
                'Inglês',
                'Espanhol',
                'Sociologia',
                'Filosofia',
                'Física',
                'Biologia'
            ]
        },
        yAxis: {
            min: 0,
            allowDecimals: false,
            title: {
                text: 'Questões'
            }
        },
        legend: {
            shadow: false
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                grouping: false,
                shadow: false,
                borderWidth: 0
            }
        },
        series: [
        {
            name: 'Questões respondidas',
            color: 'rgba(24,143,177,1)',
            data: [estatisticas.mat,estatisticas.geo,estatisticas.hist,estatisticas.port,estatisticas.quim,estatisticas.ing,estatisticas.esp,estatisticas.soc,estatisticas.fil,estatisticas.fis,estatisticas.bio],
            pointPadding: 0.3,
            pointPlacement: -0.2
        },
        {
            name: 'Acertos',
            color: 'rgba(106,190,69,1)',
            data: [estaAcertos.mat,estaAcertos.geo,estaAcertos.hist,estaAcertos.port,estaAcertos.quim,estaAcertos.ing,estaAcertos.esp,estaAcertos.soc,estaAcertos.fil,estaAcertos.fis,estaAcertos.bio],
            pointPadding: 0.4,
            pointPlacement: -0.2
        }
        ]
    });

       

    
}
    
function checaQuestao() {

    //Criando variavel se não existir
    //if(!questCont){var questCont=0;}
    //if(!estatisticas){var estatisticas={mat: 0, geo: 0, hist: 0, port: 0, quim: 0};}
    //if(!estaAcertos){var estaAcertos={mat: 0, geo: 0, hist: 0, port: 0, quim: 0};}

      //Testando se ha uma opção selecionada 
      if($('input:radio[name=dificulty]:checked').length>0){


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
                case "6":
                    estatisticas.ing+=1;
                    break;
                case "7":
                    estatisticas.esp+=1;
                    break;
                case "9":
                    estatisticas.soc+=1;
                    break;
                case "10":
                    estatisticas.fil+=1;
                    break;
                case "11":
                    estatisticas.fis+=1;
                    break;
                case "12":
                    estatisticas.bio+=1;
                    break;

          }

          //Testando se e certa  
          if(opcoes[Number($('input:radio[name=dificulty]:checked').attr("id"))].right_answer== 1){
            localStorage.sequences = Number(localStorage.sequences)+1;
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
                    case "6":
                        estatisticas.ing+=1;
                        break;
                    case "7":
                        estatisticas.esp+=1;
                        break;
                    case "9":
                        estatisticas.soc+=1;
                        break;
                    case "10":
                         estatisticas.fil+=1;
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

          }else if($('input:radio[name=answer]:checked').val()== 0){localStorage.sequences=0;}

          cont++;

          //Caso uma proxima questao exista mostra a proxima
          if(questoes[cont] != undefined){
          $("#enunciado ").html(questoes[cont].titulo);
          $("#numeroQuestao").html((cont+1)+"/"+questoes.length);
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

    function nextLetter(s){
    return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function(a){
        var c= a.charCodeAt(0);
        switch(c){
            case 90: return 'A';
            case 122: return 'a';
            default: return String.fromCharCode(++c);
        }
    });
}
    function checaNivel(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST","php/professor.php",true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
        var vars = "user="+localStorage.usuario;
    
        xhr.onreadystatechange = function(){
	    if(xhr.readyState == 4 && xhr.status == 200){
		    var return_data = xhr.responseText;
            return_data = $.parseJSON(return_data);
            //$("#prg").progressbar({value: return_data.acertos_geral});
            //$("#prg").val(Number(return_data[0].acertos_geral));
            //$("#prg").max(((Number(return_data[0].nivel)+1)*10)-10);

            if(Number(return_data[0].acertos_geral) >= ((Number(return_data[0].nivel)+1)*15)-15){
               levelUpP(localStorage.usuario);
            }else{
            
          ///  prg.max = ((Number(return_data[0].nivel)+1)*15)-15;
           // prg.value = Number(return_data[0].acertos_geral);
            
            var esch = "Nivel "+return_data[0].nivel+" - "+return_data[0].acertos_geral+" / "+(((Number(return_data[0].nivel)+1)*15)-15);
            
            $("#linha_dados_usuario").append(esch);
            
			//$("#fraseTeacher").html(return_data[0].content); //gambiarra para contornar problema indescritivel com javascript
        }
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    xhr.send(vars); // Actually execute the request
    
    }

   

        
    
    function levelUpP(user){
        
        
        lvl = new XMLHttpRequest(); 

        lvl.open("POST","php/professor.php",true);
        lvl.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
        var vars = "usuario="+user;
    
        lvl.onreadystatechange = function(){
        if(lvl.readyState == 4 && lvl.status == 200){
            if(Number(lvl.responseText)>0){
            //alert("Muito bem!");}
            $("body").append("<div class='lightbox'><img id='imgFoguete' src='imagens/foguete_fases/rocket8.png' height='300px'><img id='imgProfessor' src='imagens/mensagem_foguete.png' ><a href = 'javascript:void(0)'' onclick = 'fecha()'><input type='button' class='botao' value='OK'></a></div><div class='fundo_preto'></div>");
            
            $('.lightbox').show();
            $('.fundo_preto').show();
            //var return_data = lvl.responseText;
            //return_data = $.parseJSON(return_data);
            //console.log(return_data[0].nivel);
            
            //$("#linha_dados_usuario").append("Nivel "+return_data[0].nivel);
            
            //$("#linha_dados_usuario").append(esch);
            
            //$("#fraseTeacher").html(return_data[0].content); //gambiarra para contornar problema indescritivel com javascript
        }
        }

         lvl.send(vars);
    }

$("#confirm").click(function(event) {
    /* Act on the event */
    checaQuestao();
});


function restart() {
    if (this.expired()) {
      window.location.href = "home.html"
    }
  }
    
    function ending(){
        console.log(this.duration);
        console.log(this.duration - this.time);
        console.log(((this.duration - this.time)*100)/this.duration);
        if(((this.duration - this.time)*100)/this.duration>=90 && ((this.duration - this.time)*100)/this.duration<95){
            $("#tempo").css("color","#CC6600");
        }
        if(((this.duration - this.time)*100)/this.duration >=95){
            $("#tempo").css("color","#990000");
        }
        
    }



  function format(hours, minutes, seconds) {
    if(this.loop){
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = hours + ':' + minutes + ':' + seconds;
  }}

});