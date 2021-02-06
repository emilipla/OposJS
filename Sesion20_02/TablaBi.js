//Ejemplo para una tabla de 3 filas y 2 columnas :
function matBidim() {
var tabla = new Array(3);
tabla[0] = new Array(2);
tabla[0][0] = 10;
tabla[0][1] = 5;
tabla[1] = new Array(2);
tabla[1][0] = 7;
tabla[1][1] = 8;
tabla[2] = new Array(2);
tabla[2][0] = 9;
tabla[2][1] = 3;
alert("Posición 1,1 = "+tabla[1][1]); //Visualizaría un cuadro con el número 8
//Bucle que recorre el primer array
for(var i=0; i<3; i++) {
    //Bucle que recorre el array que está en la posición i
    for(var j=0; j<2; j++) {
        document.write("Posiciòn : "+i,j+" es "+tabla[i][j]+"<br>");
        }
}
}
matBidim();
/* Bucle que recorre el primer array , si no conocemos el tamaño de la tabla.
for(var i=0; i<tabla.length; i++) {
    //Bucle que recorre el array que está en la posición i
    for(var j=0; j<tabla[i].length; j++) {
        document.write("Posición : "+i,j+" es "+tabla[i][j]+"<br>");
    }
}*/





