
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
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Porcentagem',
            data: [
            ["Física", (Number(return_data[0].acertos_fis)/total)*100],
            ["Matematica", (Number(return_data[0].acertos_mat)/total)*100],
            ["Geografia", (Number(return_data[0].acertos_geo)/total)*100],
          	["História", (Number(return_data[0].acertos_hist)/total)*100],
          	["Português", (Number(return_data[0].acertos_port)/total)*100],
          	["Química", (Number(return_data[0].acertos_quim)/total)*100],
            ["Biologia", (Number(return_data[0].acertos_bio)/total)*100]
            ]
        }]
    });


         

	   // chart1 = new Highcharts.Chart(chartOptions);
    
    }
    // Send the data to PHP now... and wait for response to update the status div
    est.send(vars); // Actually execute the request
    //$("#status").html("processing...");	
      

