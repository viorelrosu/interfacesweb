$(document).ready(function(){
	//jquery
	$(document).on("keydown", function(obj){		
		if(obj.which==37){
			$("div.keko").css({
				"left" : "-=7px",
				"background-position-x" : "+=64px",
				"background-position-y" : "-64px"				
			});
			$("span.badge").css("left", "-=7px");
		}
		if(obj.which==38){
			$("div.keko").css({
				"top" : "-=7px",
				"background-position-x" : "+=64px",
				"background-position-y" : "64px"
			});
			$("span.badge").css("top", "-=7px");
		}
		if(obj.which==39){
			$("div.keko").css({
				"left" : "+=7px",
				"background-position-x" : "+=64px",
				"background-position-y" : "-128px"
			});
			$("span.badge").css("left", "+=7px");
		}
		if(obj.which==40){
			$("div.keko").css({
				"top" : "+=7px",
				"background-position-x" : "+=64px",
				"background-position-y" : "0px"
			});
			$("span.badge").css("top", "+=7px");
		}
		x_keko=parseInt($("div.keko").css("left"));
		y_keko=parseInt($("div.keko").css("top"));
		x_apple=parseInt($("div.manzana").css("left"));
		y_apple=parseInt($("div.manzana").css("top"));	

		console.log ("keko: "+x_keko+","+y_keko);
		console.log ("manzana : "+y_apple+","+y_apple);
		
		if (x_apple>x_keko-30 && x_apple<x_keko+30)
			if (y_apple>y_keko-30 && y_apple<y_keko+30)
				{			
				$("div.keko").data("puntos", $("div.keko").data("puntos")+1);
				$("span.badge").text($("div.keko").data("puntos"));
				x=Math.random() * 1000;
				y=Math.random() * 400;
				$("div.manzana").css({"left" : x, "top" : y });
				}

	})
})