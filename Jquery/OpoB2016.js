$(document).ready(function () {
    // para mostrar la fecha actual
    var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio",
    "Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasSemana= new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes",
    "Sábado");
    var f = new Date();
    $('.fecha').text(diasSemana[f.getDay()]+","+f.getDate()+ " de "+ meses
    [f.getMonth()]+" de "+f.getFullYear());
    console.log(f.getDay());

    //Inicializar caja de texto con "placeholder"
    $("input").val("");
    $("input").focus(function(){$(this).val("");});
    /*Acciones para pasar candidatos
    Definir evento doble-click (con el método on) para elementos DOM 
    iniciales y futuros (creados dinámicamente)*/
    
    $(document).on("dblclick","section:first-child>div>p",function(){
        $("section:last-child>div").append("<p>"+ $(this).html() +"</p");
        $(this).remove();
        console.log("Pasa "+ $(this).html());
        return false;
        //var primero=document.querySelector("section:first-child>div>p[1]");
        
    });
    $(document).on("dblclick","section:last-child>div>p",function(){
        $("section:first-child>div").append("<p>"+ $(this).html() + "</p");
        $(this).remove();
        return false;
    });
$("button").click(function (e) { 
    e.preventDefault();
    var textointroducido=$("input").val();
    if (textointroducido !=""){
        $("section:first-child>div").append("<p>"+textointroducido+"<p>");
    }
    //Inicializar la caja de texto con el "placeholder"
$("input").val("");
});        

});