$(document).ready(function(){
	var borrados=[];
	$("#bajar").on("click", function(){
		$("ul.aficiones li:first").appendTo("ul.aficiones");
	})	
	$("#subir").click(function(){
		$("ul.aficiones li:last").prependTo("ul.aficiones");
	})
	$("#copiar").click(function(){
		$("ul.aficiones li:first").clone().appendTo("ul.aficiones")
	})	
	$("#borrar").click(function(){
		$borrado=$("ul.aficiones li:last").detach();
		borrados.push($borrado);
		alert(borrados.length);
		$("span#num").text($("ul.aficiones li").length);
	})
	$("#aniadir").click(function(){
		var aficion=$("input#aficion").val();
		if (aficion!=""){
			$("<li>"+aficion+"</li>").appendTo("ul.aficiones");			
			$("input#aficion").val("");
			$("span#num").text($("ul.aficiones li").length);
		}else{
			$("#error").fadeIn(1000).delay(2000).slideUp();
		}
	})
	$("#habilitar").click(function(){
		$("ul.aficiones li").on("click", function(){
			$(this).toggleClass("destacado");
		});
	})
	$("#deshabilitar").click(function(){
		$("ul.aficiones li").off("click");
	})
	$("#undo").on("click", function(){	
		long = borrados.length-1;	
		if (long < 0){
			$("#error").text("No hay elementos borrados que recuperar");
			$("#error").fadeIn(1000).delay(2000).slideUp();
		}else{
			$("ul.aficiones").append(borrados[borrados.length-1]);
			borrados.pop(borrados[borrados.length-1]);
		}
	})
	$("ul.aficiones").on("click", "li", function(){
			$(this).toggleClass("destacado");			
		}
	)

	$(document).on({
		"click" : function(event_objet){
			$("#info").text("Has pulsado en las coordenadas X:"+event_objet.pageX+" , Y: "+event_objet.pageY);
		},
		"mousemove" : function(obj){
			$("#info").text("El puntero está en las coordenadas X:"+obj.pageX+" , Y: "+obj.pageY);
	}
	})

	$("a").on("click", function(obj){
		alert("No voy a ir a google");
		obj.preventDefault();
	})

})