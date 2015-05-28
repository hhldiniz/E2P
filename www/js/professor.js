jQuery( document ).ready(function( $ ) {
  
var hr = new XMLHttpRequest();
	    hr.open("GET","php/professor.php",true);    
	    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");    

        hr.onreadystatechange = function(){
	    if(hr.readyState == 4 && hr.status == 200){
		    var return_data = hr.responseText;
            return_data = $.parseJSON(return_data);
			$("#fraseTeacher").html(return_data[0].content); //gambiarra para contornar problema indescritivel com javascript

	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(); // Actually execute the request
     $("#fraseTeacher").html("Pensando...");	
    
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
                nivelret = levelUp(localStorage.usuario);
            }else{
            
            prg.max = ((Number(return_data[0].nivel)+1)*15)-15;
            prg.value = Number(return_data[0].acertos_geral);
            
            var esch = "<br>Nivel "+return_data[0].nivel+" - "+return_data[0].acertos_geral+" / "+(((Number(return_data[0].nivel)+1)*15)-15);
            
            $("#linha_dados_usuario").append(esch);
            
			//$("#fraseTeacher").html(return_data[0].content); //gambiarra para contornar problema indescritivel com javascript
        }
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    xhr.send(vars); // Actually execute the request
    // $("#fraseTeacher").html("Pensando...");


    function levelUp(user){
        lvl = new XMLHttpRequest(); 

        lvl.open("POST","php/professor.php",true);
        lvl.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
        var vars = "usuario="+user;
    
        lvl.onreadystatechange = function(){
        if(lvl.readyState == 4 && lvl.status == 200){
            if(Number(lvl.responseText)>0){
            location.reload();}
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

   


    
});