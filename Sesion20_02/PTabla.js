//Array
let tabla=[10,20,30,'leon',true,"Fin"]; // permite cualquier tipo
console.log("Mi tabla es : "+ tabla); // visualiza el contenido de la tabla
console.log("El Primer elemento es: "+ tabla[0]); // 1 elemento
let tamaño=tabla.length; // tamaño de la tabla, dimensión
console.log("El tamaño de la tabla es " +tamaño);
// Recorer un Array
console.log("Recorrer un Array");
console.log("Mi tabla es : "+ tabla)
for (let i=0;i<tamaño;i++) {
    console.log("Rec1_Elemento Nº " + i + " es "+ tabla[i]);

}
// Tres formas de recorrer un Array
let fecha=[23,5,"Hola",Date()]; //Forma simplificada
//let fecha=new Array(23,5,"Hola",new Date());
console.log("Mi tabla es : "+ fecha)
for(let i=0;i<fecha.length;i++) {
    console.log("Rec2_Tabla fecha: = "+fecha[i]);
}
for(let Index in fecha){
    console.log("Tabla fecha con Indice: = "+Index+" es "+fecha[Index]); // Parecido a forEach
}
fecha.forEach((item)=>console.log("Tabla fecha con Flechas:= " + item));