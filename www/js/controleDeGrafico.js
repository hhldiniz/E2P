var grafico= new Highcharts.Chart({
chart:
{
	renderTo: document.getElementById("grafico"),
	defaultSeriesType: 'bar' 
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
series:[
{
	name: 'Aluno1',
	data: [0,1,2]
},
{
	name: 'Aluno2',
	data: [5,6,7]
}
]
});

