$(document).ready(function(){

	$(".cuadro").each(function(idx,el){
		moverCuadro($(this));
		$(this).data("clicks",0);
	})

	$(".cuadro").on("click",function(){
		var clicks = $(this).data("clicks")+1;
		$(this).data("clicks", clicks).text(clicks);
		//console.log(clicks);
		moverCuadro($(this));
	})

	function moverCuadro(el) {
		var top = Math.floor(Math.random()*(500));
		var left = Math.floor(Math.random()*(500));
		el.css({
			"top":top,
			"left":left
		})
	}

});
