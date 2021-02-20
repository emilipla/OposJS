function Aobjetos (){
    document.getElementById("titulo").innerHTML="Array con objetos";
//Array de objetos Creacion de objetos
let p1={id:1,name: "Pedro", Apellido: "López"};
let p2={id:2,name: "juan", Apellido: "Rodriguez"};
let p3={id:3,name: "Ana",Apellido: "Sánchez"};
let p4={id:4,name: "Maria", Apellido: "Paredes"};
let a3=[p1,p2,p3,p4];
console.log(a3.indexOf(p3)); // me muestra el indice del valor  // 2
// Funcion normal
let nombres=a3.map(function(elem){
//return elem.name; //devuelve todos los elementos name de la tabla
return  elem.id +" " + elem.name+ " "+ elem.Apellido;
});
console.log(a3);
console.log(nombres);
// Función de Flechas
/*let nombres=a3.map(elem=>elem.name); // devuelve los nombres de las personas
console.log(a3);
console.log(nombres);*/
}
//Array con objetos();
document.getElementById("boton").onclick=function(){
    Aobjetos();
}
// Métodos every y some de las arrays

function Pares() {
    document.getElementById("titulo").innerHTML="Array con Pares / Impares";
    let a4 = [24,56,2,35,66];
    console.log(a4);
    let result=a4.every(elem=>elem %2 ===0); // ¿Todos son Pares? devuelve false
    console.log("Todos son Pares ?  "+result);
    let result2=a4.some(elem=>elem %2 ===0); // Alguno es par? devuelve true
    console.log("Hay alguno par? "+result2);

}
    document.getElementById("boton1").onclick=function(){
        Pares();
}
function Multiplica() {
    document.getElementById("titulo").innerHTML="Multiplica Pares por 2";
    let a5 = [24,53,2,35,66];
    a5.forEach((elem,index) => { // function callback(currentValue, index, array)
        console.log("Indice: "+index+" ,valor "+elem); // Muestra posición y elemento
    });
    let a7=a5.map(elem=> { // multiplicamos x 2 los pares
        if(elem % 2===0)
           return elem*2;
        else
           return elem;
    });
    console.log(a7);
}
    document.getElementById("boton2").onclick=function(){
        Multiplica();
}

