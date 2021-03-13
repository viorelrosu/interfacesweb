(function($){
	$.fn.subir = function(){
		var li = $(this).parent();
		li.insertBefore(li.prev());
	}
	$.fn.bajar = function(){
		var li = $(this).parent();
		li.insertAfter(li.next());
	}
	$.fn.duplicar = function(){
		var li = $(this).parent();
		li.clone(true).insertAfter(li);
	}
	$.fn.borrar = function(){
		$(this).parent().remove();
	}
})(jQuery)