$(document).ready(function(){

	$('ul#menu1 li').hover(
		function(){
			$(this).children("ul").stop();
			$(this).find("ul").first().slideDown();
		},
	    function(){
	    	$(this).children("ul").stop();
	    	$(this).find("ul").first().slideUp();
		}
	);

});
