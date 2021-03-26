$(document).ready(function(){

$('#formulario').submit(function(e){
    e.preventDefault();
    var nombre = $('#nombre').val() // capturo el nombre
    var apellido = $('#apellido').val()
    console.log(nombre)
    //alert ("Nombre: "+nombre+" Apellido: "+apellido) se puede utilizar también
    $('#datos').text(nombre+" "+apellido) // sustituye al getElementById...
    
})











})