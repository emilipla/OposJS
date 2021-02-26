// Función arrancarTimer 
function arrancarTimer() {
    // Valor de inicio del timer 
    valorTimer = 11;

    // Llamada a la función actualización del timer 
    actualizarTimer();
}

// Función actualizarTimer 
function actualizarTimer() {
    if (valorTimer > 0) {
        // Decrementar de una unidad (segundo) 
        valorTimer = valorTimer - 1;
        // Visualización del valor actualizado del timer 
        document.getElementById("visualizacionTimer").innerHTML = valorTimer;
        // Actualización mediante una llamada de la función actualizarTimer 
        if (valorTimer > 0) {
            // Actualización en segundos (1000 millisegundos)

            miTimer = setTimeout("actualizarTimer()", 1000);
        }
    }
}

/* Función paradaTimer*/
function paradaTimer() {
    clearTimeout(miTimer);
}
