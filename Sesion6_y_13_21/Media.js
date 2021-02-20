// Media de n números reales introducidos por teclado ( 0 termina)
// inicialización
cnt = 1    // Si se utiliza do while hay que poner 0
suma = 0.0

// introduce primer número
num = parseFloat(prompt("Número (0 para terminar): "))

// bucle
while(num != 0){  // mientras el n introducido sea distinto a 0
    suma = suma + parseFloat(num)  // acumulador
    num = parseFloat(prompt("Número (0 para terminar): "))
    cnt = cnt + 1 // o cnt++   contador
}

// Visualizar resultado
if (cnt == 1) {   // con == compara
document.getElementById("titulo").innerHTML="No hay ningún número"
} else {
    media = suma / (cnt-1)
    document.getElementById("titulo").innerHTML=("Media: " + media)
}
