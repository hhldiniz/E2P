$(document).ready(function(){
	 $("#login").click(function(){
        localStorage.setItem("usuario",$("#usuario").val());
        localStorage.setItem("senha",$.md5($("#senha").val()));
    });
});
