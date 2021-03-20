/*
			Función que verifica  los valores seleccionados
			en un juego de casillas de selección
			*/
    form = document.getElementById('formulario');
    
    form.addEventListener('submit', seleccionDeportes); //evento submit
    
			function seleccionDeportes() {
				/*
				Recuperación de los deportes propuestos
				en el formulario en una tabla
				*/
				var tabDeportes = document.forms.lista_deportes.elements["deportes[]"];
				/* Determinación del número deportes propuestos */
				var numeroDeportes = tabDeportes.length;
                console.log(numeroDeportes)
				// alert("Número deportes : " + numeroDeportes);
				/* Recorrido de la tabla de los deportes propuestos */
				var i = 0;
				var numeroDeportesSeleccionados = 0;
				while (i < numeroDeportes) {
					/* Verifica si el deporte se ha marcado */
					if (tabDeportes[i].checked) {
						/* Incremento del número de deportes seleccionados */
						numeroDeportesSeleccionados = numeroDeportesSeleccionados + 1;
						/* Visualización de de control */
						alert("Su deporte favorito es " + tabDeportes[i].value);
					}
					i = i + 1;
				}
				/* Mensaje de alerta si no se ha seleccionado ningún deporte */
				if (numeroDeportesSeleccionados == 0) {
					/* Mensaje de alerta */
					alert("Sin selección");
					/* Valor de retorno */
					return false;
				} else {
					/* Valor de retorno */
					return true;

				}
			}