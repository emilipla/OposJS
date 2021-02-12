			/* Visualización del nombre del script */
			alert("Calculo Superficie Circulos");

			/* Declaración de variables locales */
			var radio1, radio2, pi, superficie1, superficie2, diferencia;

			/* Inicialización de las variables */
			//radio1 = 5.5;
			//radio2 = 3.5;
			pi = 3.14;
			//Tambien se puede introducir por teclado, cuidado string
			radio1=prompt("radio1: ")
			console.log(radio1)
			console.log(typeof radio1)
			radio2=parseInt(prompt("radio2: "));
			console.log(typeof radio2)
			console.log(radio2)
			console.log(radio1+radio2)

			/* Cálculos */
			superficie1 = pi * radio1 * radio1;
			superficie2 = pi * radio2 * radio2;
			diferencia = superficie1 - superficie2;

			/* Visualización de los resultados */
			document.write("Superficie 1 : " + superficie1 + "<br />");
			document.write("Superficie 2 : " + superficie2 + "<br />");
			alert("Diferencia : " + diferencia);

