// inicialización
var num, cnt, suma, media
suma = 0.0

// bucle para 10 números, es determinado
for (cnt=1; cnt<=10; cnt++) {
    num = parseFloat(prompt("Número " + cnt))
    suma = suma + parseFloat(num)
 }

// Visualizar resultado
media = suma / 10
document.getElementById("titulo").innerHTML=("Media: " + media)
console.log(suma)