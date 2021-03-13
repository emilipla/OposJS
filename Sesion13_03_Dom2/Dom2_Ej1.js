/*console.log(document.querySelector("#div1 a").title); // Imprime "hola mundo" o "enlace fuera"
console.log(document.querySelector("#div1 a")) // Devuelve elemento a
console.log(document.querySelector("#div1 >a").title);
// ERROR: No hay un hijo inmediato dentro de <div id="div1"> el cual sea un enlace <a>*/

var titulo= document.querySelectorAll("#div1 [title]"); 
console.log(titulo[2].title);// Imprime "hola de nuevo"

console.log(document.querySelector("#div1 > p > a").title); // Imprime "hola mundo"
// Si queremos tener todos los elementos de a , se puede recorrer como array
var todos_a= document.querySelectorAll("#div1 a"); 
console.log("Con array "+ todos_a[1].title)

console.log(document.querySelector(".normalLink[title^='adios']").title); 
// Imprime "adios mundo" busca con el atributo "title" un valor que empiece por adios

console.log(document.querySelector(".normalLink[title^='adios'] + a").title); 
// Imprime "hola de nuevo" busca con el atributo "title" el valor siguiente

/*let elems = document.querySelectorAll(".normalLink");

elems.forEach((elem)=> { // Imprime "hola mundo" y "adios mundo"
console.log("E1 - " + elem.title);
});*/

let elems2 = document.querySelectorAll("a[title^='hola']"); // Atributo title empieza por “hola...”
elems2.forEach(function(elem) { // Imprime "hola mundo" y "hola de nuevo"
console.log("E2 - "+elem.title);
});

let elems3 = document.querySelectorAll("a[title='hola de nuevo'] ~  a"); // Hermanos de <a title="hola mundo">
elems3.forEach(function(elem) { // Imprime "adios mundo" y "hola de nuevo"
console.log("E3 -  "+elem.title);
});
