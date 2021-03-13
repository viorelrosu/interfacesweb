$(document).ready(function(){

	$("#boton").on("click",function(){
		var speed = $("input[name='tiempo']").val();
		if(speed == '') {
			alert('selecciona el tiempo');
			return false;
		}
		switch($("input:radio:checked").val()){
			case "0":
				//console.log('efecto fade');
				$("p").fadeToggle(speed*1000);
			break;
			case "1":
				//console.log('efecto slide');
				$("p").slideToggle(speed*1000);
			break;
			default:
				alert('selecciona un efecto');
			break
		}
	})

});
