// inicialización
cnt = 1
suma = 0.0

// introduce primer número
num = parseFloat(prompt("Número (0 para terminar): "))

// bucle
while(num != 0){
    suma = suma + parseFloat(num)
    num = parseFloat(prompt("Número (0 para terminar): "))
    cnt = cnt + 1 // o cnt++
}

// Visualizar resultado
if (cnt == 1) {
document.getElementById("titulo").innerHTML="No hay ningún número"
} else {
    media = suma / (cnt-1)
    document.getElementById("titulo").innerHTML=("Media: " + media)
}
