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
    
});