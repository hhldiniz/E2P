
	function estat(){
    var est = new XMLHttpRequest();
        est.open("POST","php/estatisticas.php",true);
        est.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     
     var vars = "user="+localStorage.usuario;

     est.onreadystatechange = function() {
	    if(est.readyState == 4 && est.status == 200) {
            

};
		    var return_data = est.responseText;
            return_data = $.parseJSON(return_data);
           // window.location.href = "home.html";
           var total = Number(return_data[0].acertos_geral);

           


           $('#grafico').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: 'Aproveitamento por matérias'
        },
        tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
        series: [{
            type: 'pie',
            name: 'Porcentagem',
            data: [
            
            ["Matematica", (Number(return_data[0].acertos_mat)/total)*100],
            ["Geografia", (Number(return_data[0].acertos_geo)/total)*100],
          	["História", (Number(return_data[0].acertos_hist)/total)*100],
          	["Português", (Number(return_data[0].acertos_port)/total)*100],
          	["Química", (Number(return_data[0].acertos_quim)/total)*100],
            ["Inglês", (Number(return_data[0].acertos_ing)/total)*100],
            ["Espanhol", (Number(return_data[0].acertos_esp)/total)*100],
            ["Sociologia", (Number(return_data[0].acertos_soc)/total)*100],
            ["Filosofia", (Number(return_data[0].acertos_fil)/total)*100],
            ["Física", (Number(return_data[0].acertos_fis)/total)*100],
            ["Biologia", (Number(return_data[0].acertos_bio)/total)*100]
            ]
        }]
    });


         

	   // chart1 = new Highcharts.Chart(chartOptions);
    
    }
    // Send the data to PHP now... and wait for response to update the status div
    est.send(vars); // Actually execute the request
    //$("#status").html("processing...");	
      

}


function ranking(){
    var est = new XMLHttpRequest();
        est.open("POST","php/ranking.php",true);
        est.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     
    

     est.onreadystatechange = function() {
        if(est.readyState == 4 && est.status == 200) {
            

};
            var return_data = est.responseText;
            return_data = $.parseJSON(return_data);
           // window.location.href = "home.html";
          // var total = Number(return_data[0].acertos_geral);

           


           $('#grafico').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Top 10 Aprendizes'
        },
        xAxis: {
            categories: [
                return_data[0].user,
                return_data[1].user,
                return_data[2].user,
                return_data[3].user
                /*return_data[4].user,
                return_data[5].user,
                return_data[6].user,
                return_data[7].user,
                return_data[8].user,
                return_data[9].user*/
            ]
        },
        yAxis: [{
            min: 0,
            title: {
                text: 'Acertos'
            }
        } ],
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
        series: [{
            name: 'Acertos',

            color: 'rgba(24,143,177,1)',
            data: [Number(return_data[0].acertos_geral), Number(return_data[1].acertos_geral), Number(return_data[2].acertos_geral),Number(return_data[3].acertos_geral)],
            pointPadding: 0.3,
            pointPlacement: 0
        }, 
              
            
       ]
    });


         

       // chart1 = new Highcharts.Chart(chartOptions);
    
    }
    // Send the data to PHP now... and wait for response to update the status div
    est.send(); // Actually execute the request
    //$("#status").html("processing...");   
      

}