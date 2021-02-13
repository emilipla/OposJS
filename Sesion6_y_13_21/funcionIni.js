/*// Primera función
function suma(num1,num2){
    return num1 + num2
}
//suma(5,5); //Ejecuta o invoca la funcion
var x = 8 //Se pueden usar variables
var y = 7
document.getElementById("titulo").innerHTML =suma(x,y)
// los parámetros pueden ser texto también*/

//Funciones sin parámetros y anónimas
function cambia(){ // Sin parámetros
    document.getElementById("titulo").innerHTML="Cambiado"
} // si no ejecuto no cambia
document.getElementById("boton").onclick = function(){
    cambia()
}

//Optimización de funcion con Arrow
/*function saludar (nombre) {
    return "Hola" + nombre
}
document.getElementById("titulo").innerHTML=saludar("  Higinio")*/
// Arrow
var saludar= nombre => "Hola " +nombre
document.getElementById("titulo").innerHTML=saludar("  Higinio")