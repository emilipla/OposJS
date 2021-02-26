function visualizarHoraActual() {
    // Recuperación de la hora del sistema
    var miReferenciaTiempo = new Date();

    // Conversión de la hora del sistema en formato local (hh:mm:ss)
    var hhmmss = miReferenciaTiempo.toLocaleTimeString();
    
    // Visualización del span horaEnCurso 
    document.getElementById("horaEnCurso").innerHTML= hhmmss ;

    }


var miHora = setInterval(function() {
    visualizarHoraActual()
}, 1000);

