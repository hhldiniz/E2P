function requestData() {
    $.ajax({
        url: 'php/ranking.php',
        success: function(point) {
            var series = chart.series[0],
                shift = series.data.length > 20; // shift if the series is 
                                                 // longer than 20

            // add the point
            chart.series[0].addPoint(point, true, shift);
            
            // call it again after one second
            setTimeout(requestData, 1000);    
        },
        cache: false
    });
}
$(document).ready(function(){
 chart = new Highcharts.Chart({
chart:
{
	renderTo: grafico,
	type: 'line', 
	events:
	{
		load: requestData
	}
},
title:
{ 
	text:'Seu desempenho'
},
xAxix:
{
	title:
		{
			text: 'Tempo'
		}	
},

yAxix:
{	
	title:
		{
			text: 'Acertos'
		}
},
series:[{
	name: "Teste",
	data: [],
}]
});
});
