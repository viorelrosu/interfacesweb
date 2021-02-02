$(document).ready(function(){
	//jquery
	$("button").on("click",function(){
		var pulsaciones = $(this).data("veces");
		pulsaciones++;
		$(this).data("veces",pulsaciones);		
		//actualizar el valor del badge
		$(this).find("span.badge").text($(this).data("veces"));
	})
})