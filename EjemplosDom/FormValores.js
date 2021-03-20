let form = null;

document.addEventListener('DOMContentLoaded', e => { //Evento cuando se carga el Doc
    form = document.getElementById('formulario');
    console.log(form)
    console.log(form.aficiones)
    form.addEventListener('submit', envioForm); //evento submit
});

function envioForm(e) {
    e.preventDefault();
    const aficiones = Array.from(form.aficiones) //crea una nueva instancia de array

        /*.filter(input => input.checked) // con arrow */ 

        .filter (function (a){  //sin arrow crea una matriz filtrada por la funcion
            return a.checked
        })
        .map(input => input.value); //crea una nueva matriz con la funcion
       
    document.getElementById('envio').textContent = `Nombre: ${form.nombre.value},
    Aficiones: ${aficiones}, Color: ${form.color.value}`;

    if(formulario.fichero.files.length) { // Si hemos seleccionado un archivo
        const fichero = formulario.fichero.files[0];
        console.log(formulario.fichero.files)
        document.getElementById('envioArchivo').textContent = `Archivo: ${fichero.name},
        tipo: ${fichero.type}, tamaño: ${fichero.size}bytes`;

        if(fichero.type.startsWith('image')) {  //busca un string tipo "image" 
            console.log(fichero.type.startsWith('image'))
            cargaImagen(fichero);
        }
    }
}

function cargaImagen(fichero) {
    let reader = new FileReader();
    reader.readAsDataURL(fichero); // muestra la URL de la imagen

    reader.addEventListener('load', e => {
        document.getElementById("imgPreview").src = reader.result; //Visualiza la imagen
    });
}
