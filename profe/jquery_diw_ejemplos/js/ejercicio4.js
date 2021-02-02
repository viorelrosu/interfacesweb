$(document).ready(function(){
	//aquí el jquery
	$(".cuadro").on("click", function(){
		color=$(this).attr("id");
		$("body").css("backgroundColor",color);
	})
	$(".cuadro").on("mousemove", function(obj){
		texto=$(this).attr("value");
		$("#tip")
			.css("top",obj.pageY+15)
			.css("left",obj.pageX+15)
			.text(texto)
			.css("visibility", "visible");
	})
	$(".cuadro").on("mouseleave", function(){
		$("#tip").css("visibility", "hidden");		
	})
	/*$("#verde").on("click", function(){
		$("body").css("backgroundColor","green");
	})
	$("#rojo").on("click", function(){
		$("body").css("backgroundColor","red");
	})
	$("#gris").on("click", function(){
		$("body").css("backgroundColor","grey");
	})*/
})