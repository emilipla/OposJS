$(document).ready(function () { 

   //$('h1').html('texto modificado con etiqueta h1');
   //$('#idh1').html('texto modificado con ID');
   //$('.text-center').html('texto modificado con clase');
    
    //Forma con Javascript de h1
    //document.querySelectorAll ('h1')[1].innerHTML = 'Texto con etiqueta JS';
    //document.querySelector('#idh1').innerHTML = 'Texto con ID JS';
    //document.querySelector('.text-center').innerHTML = 'Texto con clase JS';

    // cambia el texto en todos los h1 de la clase
    //$(".division h1").html("cambio de texto");
    // cambia el texto en el primer h1 de la clase
    //$(".division h1:first").html("cambio de texto");
    // cambia el texto en ultimo h1 de la clase
    //$(".division h1:last").html("cambio de texto");

//Agrengando Clase addClass
//$('#idagrega').addClass('text-danger');  
//En JavaScript 2 formas de añadir
//document.querySelector('#idagrega').className +=' text-danger'
//document.querySelector('#idagrega').className ='text-center text-danger'

//Quitando Clase removeClass
//$('#idagrega').removeClass('text-center');

//añadir un elemento append / prepend
//$('#contenido').append('<h1 class="text-center">Esta es la línea 3</h1>');
//$('#contenido').prepend('<h1 class="text-center">Esta es la línea 0</h1>');

// función css
//$('#idquita').css('color', 'blue');
// para múltiples propiedades.
//$('#idquita').css({color:'blue',background:'salmon',padding:'20px'})

// función remove / hide
//$('#contenido').remove(); // lo elimina incluso de la consola
//$('#idquita').remove(); // únicamente lo oculta.
//let quitar = document.querySelector('#idquita')
//console.log(quitar)

// funcion attr

//$('img').attr('src','PBHP.png'); // mete la imagen en todos los img
//$('img:first').attr("width","80")
//$('img:last').attr("width","100")


//Evento click Agregando clase

var parrafo =$('#idcont h2'); 

$('#boton1').click(function(){
    parrafo.addClass('display-4');//cambiamos la clase para h2
});

//Evento click Agregando estilo en css
$('#boton2').click(function(){
    parrafo.removeClass('display-4');
});

//Alternativa al evento click
$('#boton3').on('click',function(){
    parrafo.toggleClass('display-4');
});


})

