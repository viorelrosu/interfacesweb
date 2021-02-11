(function($){
	$.fn.showTip = function(texto) {
		return this.hover(
			function(e){
				$("div.tip").css("top", (e.pageY-5))
					.css("left",(e.pageX+5))
					.show()
					.text(texto);
			},
			function(){
				$("div.tip").hide();
			}
		);
	};
})(jQuery);
