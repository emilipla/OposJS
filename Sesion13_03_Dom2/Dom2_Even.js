// trabajar con eventos.
var boton1 = document.getElementById("boton");
boton1.addEventListener("click", function(){
    console.log("has hecho click");
})
boton1.addEventListener("mouseover", function(){
    console.log("he detectado el ratón");
})
boton1.addEventListener("mouseout", function(){
    console.log("fuera ratón");
})
window.addEventListener("load", function(){

    console.log("has cargado el documento");
})
window.addEventListener("resize", function(){
    alert("Has modificado el tamaño");
})
