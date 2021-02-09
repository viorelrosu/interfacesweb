$(document).ready(function(){

	$(".zoom").mousemove(function(e){
		zoom(e);
	});

	function zoom(e){
		var x, y;
		var zoomer = e.currentTarget;

		var offsetX = e.offsetX;
		var offsetY = e.offsetY;

		x = offsetX/zoomer.offsetWidth*100;
		y = offsetY/zoomer.offsetHeight*100;

		zoomer.style.backgroundPosition = x+'% '+y+'%';
		//console.log(zoomer.style.backgroundPosition);
	}
});
