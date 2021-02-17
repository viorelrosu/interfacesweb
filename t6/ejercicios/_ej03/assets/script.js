$(document).ready(function(){
	$(".contar").on("click",function(){
		alert("Tenemos "+$("li").length + " registros.");
	})

	$(".subir").on("click",function(){
		$(this).subir();
	});

	$(".bajar").on("click",function(){
		$(this).bajar();
	});

	$(".duplicar").on("click",function(){
		$(this).duplicar();
	});

	$(".borrar").on("click",function(){
		$(this).borrar();
	});

});
