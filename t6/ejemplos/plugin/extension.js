(function($){
	$.fn.contar = function() {
		return this.length;
	};

	$.fn.pintar = function(color){
		return this.css("color",color);
	};

	$.fn.numerar = function(num){
		var i = num;
		return this.each(function(){
			$(this).prepend(i+". ");
			i++;
		});
	}

	$.fn.localiza = function(){
		return this.find("a").each(function(){
			$(this).append(" (" + $(this).attr("href") + ")");
		})
	}

	$.fn.fadeyclase = function(duracion,clase){
		return this.fadeIn(duracion,function(){
			$(this).addClass(clase);
		});
	}
})(jQuery);
