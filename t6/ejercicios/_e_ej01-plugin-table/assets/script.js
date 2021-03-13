$(document).ready(function(){

	$("button#add").on("click",function(){
		$(this).insertarFila($("table#tabla"));
	});

	$("table").on("click",'button',function(){
		$(this).borrarFila($("table#tabla"));
	});

});
