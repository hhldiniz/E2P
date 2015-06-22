
function checaAchievements(){

	if(Number(localStorage.sequences)>=5){
			console.log("opa garoto");
	}
	if(Number(localStorage.sequences)>=10){
			console.log("rapazz");
		}
    
   //   window.location.href = "home.html";
}


function checaConquistas() {
	var est = new XMLHttpRequest();
	est.open("POST","php/estatisticas.php",true);
	est.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	var vars = "user="+localStorage.usuario;

	est.onreadystatechange = function() {
		if(est.readyState == 4 && est.status == 200) {
		
		var return_data = est.responseText;
		return_data = $.parseJSON(return_data);
        // window.location.href = "home.html";
        var total = Number(return_data[0].acertos_geral);
        var jogos = Number(return_data[0].jogos_realizados);
       
        

        var path = window.location.pathname;
        var page = path.split("/").pop();
        //console.log( page );


        if(page === "insignias.html"){
        
        // COM BASE NA QTD DE JOGOS REALIZADOS
        if (jogos >= 1) {
			$("#parafuso").removeClass("insignia_estrela");
			$("#parafuso").addClass("insignia_estrela_conquistada");
        }
        if (jogos >= 10) {
			$("#engrenagens").removeClass("insignia_estrela");
			$("#engrenagens").addClass("insignia_estrela_conquistada");
        }
        if (jogos >= 30) {
			$("#motor").removeClass("insignia_estrela");
			$("#motor").addClass("insignia_estrela_conquistada");
        }
        if (jogos >= 50) {
			$("#propulsor").removeClass("insignia_estrela");
			$("#propulsor").addClass("insignia_estrela_conquistada");
        }

        // COM BASE NA QTD DE QUESTOES ACERTADAS
        if (total >= 25) {
			$("#vega").removeClass("insignia_estrela");
			$("#vega").addClass("insignia_estrela_conquistada");
        }
        if (total >= 40) {
			$("#capella").removeClass("insignia_estrela");
			$("#capella").addClass("insignia_estrela_conquistada");
        }
        if (total >= 80) {
			$("#aldebaran").removeClass("insignia_estrela");
			$("#aldebaran").addClass("insignia_estrela_conquistada");
        }
        if (total >= 100) {
			$("#regulus").removeClass("insignia_estrela");
			$("#regulus").addClass("insignia_estrela_conquistada");
        }


        if (total >= 400) {
			$("#cientista").removeClass("insignia_chapeu");
			$("#cientista").addClass("insignia_chapeu_conquistada");
        }
        if (return_data[0].acertos_mat >= 50) {
			$("#matematico").removeClass("insignia_chapeu");
			$("#matematico").addClass("insignia_chapeu_conquistada");
        }
        if (return_data[0].acertos_geo >= 50) {
			$("#geografo").removeClass("insignia_chapeu");
			$("#geografo").addClass("insignia_chapeu_conquistada");
        }
        if (return_data[0].acertos_hist >= 50) {
			$("#historiador").removeClass("insignia_chapeu");
			$("#historiador").addClass("insignia_chapeu_conquistada");
        }
        if (return_data[0].acertos_port >= 50) {
			$("#linguista").removeClass("insignia_chapeu");
			$("#linguista").addClass("insignia_chapeu_conquistada");
        }
        if (return_data[0].acertos_quim >= 50) {
			$("#quimico").removeClass("insignia_chapeu");
			$("#quimico").addClass("insignia_chapeu_conquistada");
        }
        if (return_data[0].acertos_fis >= 50) {
			$("#fisico").removeClass("insignia_chapeu");
			$("#fisico").addClass("insignia_chapeu_conquistada");
        }
        if (return_data[0].acertos_bio >= 50) {
			$("#biologo").removeClass("insignia_chapeu");
			$("#biologo").addClass("insignia_chapeu_conquistada");
        }
            
        }else if(page === "partida.html"){
            
            if (jogos >= 1 && localStorage.parafuso == null) {
			$.simplyToast("Parafuso Conquistado!","success");
            localStorage.parafuso = 1;
        }
        if (jogos >= 10 && localStorage.engrenagens == null) {
			$.simplyToast("Engrenagens Conquistadas!","success");
            localStorage.engrenagens = 1;
        }
        if (jogos >= 30 && localStorage.motor == null) {
			$.simplyToast("Motor Conquistado!","success");
            localStorage.motor = 1;
        }
        if (jogos >= 50 && localStorage.propulsor == null) {
			$.simplyToast("Propulsor Conquistado!","success");
            localStorage.propulsor = 1;
        }

        // COM BASE NA QTD DE QUESTOES ACERTADAS
        if (total >= 25 && localStorage.vega == null) {
			$.simplyToast("Vega Conquistada!","success");
            localStorage.vega = 1;
        }
        if (total >= 40 && localStorage.capella == null) {
            $.simplyToast("Capella Conquistado!","success");
            localStorage.capella = 1;
        }
        if (total >= 80 && localStorage.aldebaran == null) {
            $.simplyToast("Aldebaran Conquistada!","success");
            localStorage.aldebaran = 1;
        }
        if (total >= 100 && localStorage.regulus == null) {
            $.simplyToast("Regulus Conquistadao!","success");
            localStorage.regulus = 1;
        }


        if (total >= 400 && localStorage.cience == null) {
            $.simplyToast("Titulo de Cientista Conquistado!","success");
            localStorage.cience = 1;
        }
        if (return_data[0].acertos_mat >= 50 && localStorage.math == null) {
			$.simplyToast("Titulo de Matemático Conquistado!","success");
            localStorage.math = 1;
        }
        if (return_data[0].acertos_geo >= 50 && localStorage.geo == null) {
			$.simplyToast("Titulo de Geografo Conquistado!","success");
            localStorage.geo = 1;
        }
        if (return_data[0].acertos_hist >= 50 && localStorage.hist == null) {
			$.simplyToast("Titulo de Historiador Conquistado!","success");
            localStorage.hist == null
        }
           
        if (return_data[0].acertos_port >= 50 && localStorage.port == null) {
			$.simplyToast("Titulo de Linguista Conquistado!","success");
            localStorage.port = 1;
        }
        if (return_data[0].acertos_quim >= 50 && localStorage.quim == null) {
			$.simplyToast("Titulo de Quimico Conquistado!","success");
            localStorage.quim = 1;
        }
        if (return_data[0].acertos_fis >= 50 && localStorage.fis == null) {
			$.simplyToast("Titulo de Fisico Conquistado!","success");
            localStorage.fis = 1;
        }
        if (return_data[0].acertos_bio >= 50 && localStorage.bio == null) {
			$.simplyToast("Titulo de Biologo Conquistado!","success");
            localStorage.bio = 1;
        }
        }else if(page === "home.html"){
            if (jogos >= 1 && localStorage.parafuso == null) {
            localStorage.parafuso = 1;
        }
        if (jogos >= 10 && localStorage.engrenagens == null) {
            localStorage.engrenagens = 1;
        }
        if (jogos >= 30 && localStorage.motor == null) {
            localStorage.motor = 1;
        }
        if (jogos >= 50 && localStorage.propulsor == null) {
            localStorage.propulsor = 1;
        }

        // COM BASE NA QTD DE QUESTOES ACERTADAS
        if (total >= 25 && localStorage.vega == null) {
            localStorage.vega = 1;
        }
        if (total >= 40 && localStorage.capella == null) {
            localStorage.capella = 1;
        }
        if (total >= 80 && localStorage.aldebaran == null) {
            localStorage.aldebaran = 1;
        }
        if (total >= 100 && localStorage.regulus == null) {
            localStorage.regulus = 1;
        }


        if (total >= 400 && localStorage.cience == null) {
            localStorage.cience = 1;
        }
        if (return_data[0].acertos_mat >= 50 && localStorage.math == null) {
            localStorage.math = 1;
        }
        if (return_data[0].acertos_geo >= 50 && localStorage.geo == null) {
            localStorage.geo = 1;
        }
        if (return_data[0].acertos_hist >= 50 && localStorage.hist == null) {
            localStorage.hist = 1;
        }
           
        if (return_data[0].acertos_port >= 50 && localStorage.port == null) {
            localStorage.port = 1;
        }
        if (return_data[0].acertos_quim >= 50 && localStorage.quim == null) {
            localStorage.quim = 1;
        }
        if (return_data[0].acertos_fis >= 50 && localStorage.fis == null) {
            localStorage.fis = 1;
        }
        if (return_data[0].acertos_bio >= 50 && localStorage.bio == null) {
            localStorage.bio = 1;
        }
        
        
        
        }

	}}
	// Send the data to PHP now... and wait for response to update the status div
	est.send(vars); // Actually execute the request
	//$("#status").html("processing...");	


}
