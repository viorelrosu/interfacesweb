$(document).ready(function(){
	//aquí el jquery
	$("input").on("keyup", function(obj){
		ascii_tecla=obj.which;
		tecla=String.fromCharCode(ascii_tecla);
		console.log("El ASCII "+ascii_tecla+" se corresponde con el caracter "+tecla);
	})	
})