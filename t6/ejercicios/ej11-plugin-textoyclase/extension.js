(function($){
	$.fn.textoyclase = function(texto,classFocus,classBlur) {
		return this.on("focus",function(){
			$(this).addClass(classFocus);
			$(this).next().addClass(classFocus);
		}).on("blur",function(){
			$(this).removeClass(classFocus).addClass(classBlur);
			$(this).next().removeClass(classFocus);
		})
	};
})(jQuery);
