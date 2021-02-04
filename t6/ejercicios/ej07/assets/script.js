$(document).ready(function(){
	/*$("ul#menu1 li.hasSubMenu").hover(
		function(){
			$("ul#menu1 li.hasSubMenu ul").slideUp();
			$(this).children('ul').slideDown();
		},
		function(){
		}
	);

	$("ul#menu1 li.hasSubMenu ul li").hover(
		function(){
			$(this).children('ul').slideDown();
		},
		function(){
			//$(this).children('ul').slideUp();
		}
	);

	$("ul#menu1 li.item").mouseenter(function(){
		$("ul#menu1 li.hasSubMenu").children('ul').hide();
	});*/

	$('ul#menu1>li').hover(function(){
	    	$(this).find('>ul').slideDown()
		},
	    function(){
	    	//$(this).find('>ul').fadeOut();
	});	
});