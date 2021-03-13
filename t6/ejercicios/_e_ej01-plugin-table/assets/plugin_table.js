(function($){
	$.fn.insertarFila = function(tabla){
		var tr = "<tr>";

		var columnas = tabla.find('tr').first().find('td').length;

		for (var i = 0; i < columnas-1; i++) {
			tr += "<td><input type='text' /></td>";
		}

		tr += "<td><button class='borrar'>Borrar</button></td>";

		tabla.append(tr);
		return $(this);
	}

	$.fn.borrarFila = function(tabla){
		var numFilas = tabla.find("tr").length-1;

		if(numFilas == 0) {
			alert('No se puede borrar la última fila');
		} else {
			$(this).parent().parent().remove();
		}
	}
})(jQuery);