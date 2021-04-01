'use strict';

let div1 = document.getElementById("div1");
let div2 = document.getElementById("div2");
let div3 = document.getElementById("div3");

// Prueba a quitar el tercer parámetro (true) para ver como se propaga al revés
div1.addEventListener('click', event => {
    console.log("Click en div1, Fase: " + event.eventPhase);
    console.log(event.target)
    //event.stopPropagation();
}, true);
div2.addEventListener('click', event => {
    console.log("Click en div2, Fase: " + event.eventPhase);
    //event.stopPropagation();
}, true);
div3.addEventListener('click', event => {
    console.log("Click en div3, Fase: " + event.eventPhase);
    //event.stopPropagation();
}, true);
//Fase de eventos: 0 = no hay evento, 1 = se propaga de hijos a padres
// 2 = el evento ha llegado al objetivo finaliza. 3 = orden inveros padres a hijos
