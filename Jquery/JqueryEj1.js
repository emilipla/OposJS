$(document).ready(function(){ // se carga el árbol del DOM en el Obj. JQ
    var secciones=$("section")
    var divmenu =$("div.menu_punto");
    var pmenu =$("p.menu_capitulo");
    console.log(divmenu[1]);
    console.log(pmenu[0]);
    console.log(secciones[0])
    $("div.menu_punto").hide(); //Selecciona estas divs y las oculta
    $("p.menu_capitulo").click(function(){ // Al hacer click en el párrafo genera Func.
        $(this).next("div.menu_punto").slideDown(300) 
        // busca el div que le sigue y aplica efecto deslizar hacia abajo
        .siblings("div.menu_punto").slideUp("slow");
        // cierra los hermanos inmediatos con efecto de deslizar lentam. hacia arriba
    });
});
