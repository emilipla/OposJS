	/*Visualización nombre cript */
	alert ("JavaScript Oposición 8");
	/* Inicialización variables */
	min = 5;
	max = 10;
	acertar = 7;
	intento = 0;
	numerointentado = 0
	/* Introducir Intentos */
	while (intento < 3 && numerointentado != acertar) {
		numerointentado = parseFloat(prompt("Numero entre " + min + " y " + max))
		while (numerointentado < min || numerointentado > max) {
			alert("el número no está entre los valores posibles")
			numerointentado = parseInt(prompt("Numero entre " + min + " y " + max))
		}
		intento ++;
	}
	if (numerointentado == acertar) {
		alert("Enhorabuena, has acertado en el intento " + intento)
	} else {
		alert("Lo siento, has fallado después de 3 intentos")
	}