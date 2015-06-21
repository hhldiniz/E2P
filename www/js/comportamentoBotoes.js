$(document).ready(function() {

	$("#sair").click(function(){
		localStorage.setItem("usuario", null);
		location.href="index.html";
	});
	$("#foguete").click(function(){
		location.href="home.html";
	});
	$("#joystick").click(function(){
		location.href="partida.html";
	});
	$("#estrela").click(function(){
		location.href="insignias.html";
	});
	$("#estatistica").click(function(){
		location.href="estatisticas.html";
	});
	$("#coroa").click(function(){
		location.href="ranking.html";
	});
	$("#concluir").click(function(){
		if($("input:radio[name='alternativas']").is(':checked')){
				ajaxCadastraQuestao();
			}
			else{
			alert("Seleciona uma opção");}
	});

	$("#sub_chapeu").click(function() {
		$("#ins_estrelas").hide();
		$("#ins_chapeu").show();

		$("#sub_estrela").removeClass();
		$("#sub_estrela").addClass("icone_menu estrela");
		$("#sub_chapeu").removeClass();
		$("#sub_chapeu").addClass("icone_menu chapeu_selecionado selecionado");
		$(".nome_menu_esq").remove();
		$("#sub_chapeu").after("<div class='nome_menu_esq'>Títulos</div>");
	});

	$("#sub_estrela").click(function() {
		$("#ins_chapeu").hide();
		$("#ins_estrelas").show();

		$("#sub_estrela").removeClass();
		$("#sub_estrela").addClass("icone_menu estrela_selecionado selecionado");
		$("#sub_chapeu").removeClass();
		$("#sub_chapeu").addClass("icone_menu chapeu");
		$(".nome_menu_esq").remove();
		$("#sub_estrela").after("<div class='nome_menu_esq'>Conquistas</div>");
	});


});