	min = 5
	max = 10
	acertar = Math.floor(Math.random()*(max-min+1)+min)
	console.log(acertar)
	intento = 0
	numerointentado = 0
	function adivina() {
	
	if (intento < 3 && numerointentado != acertar) {
	if(numero.value==""){
	informacion.innerText = "Introduzca un número"
	return false;
	}
	numerointentado = parseInt(numero.value)
	console.log(numerointentado)
	if (numerointentado < min || numerointentado > max) {
	informacion.innerText = "El número no está entre los valores posibles"
	} else {
	intento++;
	informacion.innerText = "Intentos hechos " + intento
	}
	}
	if (numerointentado == acertar) {
	informacion.innerText = "Enhorabuena, has acertado en el intento " + intento
	} else if (intento == 3) {
	informacion.innerText = "Máximo de intentos alcanzado"
	}
	}
	
	
