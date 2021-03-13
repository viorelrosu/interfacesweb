$(document).ready(function(){

	$('ul#menu1 li').hover(function(){
			$(this).children('ul').stop();
	    	$(this).children('ul').slideDown()
		},
	    function(){
	    	$(this).children('ul').stop();
	    	$(this).children('ul').fadeOut();
		}
	);

});
