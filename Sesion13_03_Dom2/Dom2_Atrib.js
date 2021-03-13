let link = document.getElementById("toGoogle");
let link1=document.getElementById("toGoogle1")

link.className = "enlaceuni10"; // Equivale a: link.setAttribute("class", "enlaceuni10");
link.setAttribute("href", "https://uni10.es/");
link.textContent = "Uni10";
if(!link.hasAttribute("title")) { // Si no tenía el atributo title, establecemos uno 
link.title = "Ahora voy a Uni10!";
}
// Imprime: <a id="toGoogle" href="https://uni10.es/" class="enlaceuni10“ title="Ahora voy a Uni10!">Uni10</a> 
let ValorAt=link.getAttribute("title")
console.log(ValorAt);
console.log(link);
console.log(link1);

let div = document.getElementById("normalDiv");
console.log(div);
div.style.boxSizing = "border-box";
div.style.maxWidth = "200px";
div.style.padding = "50px";
div.style.color = "white";
div.style.backgroundColor = "cyan";



