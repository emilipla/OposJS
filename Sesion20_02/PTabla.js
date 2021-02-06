//Array
let tabla=[10,20,30,'leon',true,"Fin"];
console.log("Mi tabla es : "+ tabla);
console.log("El Primer elemento es: "+ tabla[0]);
let tamaño=tabla.length;
console.log("El tamaño de la tabla es " +tamaño);
// Recorer un Array
console.log("Recorrer un Array");
for (let i=0;i<tamaño;i++) {
    console.log("Elemento Nº " + i + " es "+ tabla[i]);

}
// Tres formas de recorrer un Array
let fecha=new Array(23,5,"Hola",new Date());
for(let i=0;i<fecha.length;i++) {
    console.log("Tabla fecha: = "+fecha[i]);
}
for(let Index in fecha){
    console.log("Tabla fecha con Indice: = "+fecha[Index]); // Parecido a forEach
}
fecha.forEach((item)=>console.log("Tabla fecha con Flechas:= " + item));