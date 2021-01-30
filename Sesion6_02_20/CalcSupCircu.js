			/* Visualización del nombre del script */
			alert("Calculo Superficie Circulos");

			/* Declaración de variables locales */
			var radio1, radio2, pi, superficie1, superficie2, diferencia;

			/* Inicialización de las variables */
			radio1 = 5.5;
			radio2 = 3.5;
			pi = 3.14;

			/* Cálculos */
			superficie1 = pi * radio1 * radio1;
			superficie2 = pi * radio2 * radio2;
			diferencia = superficie1 - superficie2;

			/* Visualización de los resultados */
			document.write("Superficie 1 : " + superficie1 + "<br />");
			document.write("Superficie 2 : " + superficie2 + "<br />");
			alert("Diferencia : " + diferencia);

