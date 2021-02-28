/*var lista=["Pedro",20,"Estudiante"] // con una array
console.log(lista) */
// creación de un objeto
/*var alumno1={
    nombre:'Pedro',  // se le asignan propiedades
    edad:'25',
    estudiante: true,
    estudios: {      // también pueden incluir otro objeto con sus propiedades.
        universidad: 'UMH',
        localidad: 'Elche',
    },
    Opositor(){  // esto es un método del objeto 
        return `${this.nombre} dice que tiene que estudiar más que en la carrera `
    } // this hace referencia a todo el objeto
}
// console.log(objeto['estudios']) // por el nombre de la propiedad y []
console.log(alumno1.estudios.localidad) // mediante . es lo correcto
console.log(alumno1.Opositor())*/
/*var alumno2={
    nombre:'Pepe',  // se le asignan propiedades
    edad:'25',
    estudiante: true,
    estudios: {      // también pueden incluir otro objeto con sus propiedades.
        universidad: 'UMH',
        localidad: 'Elche',
    },
    Opositor(){  // esto es un método del objeto 
        return `${this.nombre} dice quetiene que estudiar más que en la carrera `
    } // this hace referencia a todo el objeto
}

console.log(alumno2.Opositor())*/
// Crear una clase
class Alumno {
    constructor(nombre,edad) {
    this.nombre=nombre,
    this.edad=edad
    }
    Opositor(){  // esto es un método del objeto 
        return `${this.nombre} dice que tiene que estudiar más que en la carrera `
    } // this hace referencia a todo el objeto
}
// instanciar el objeto
const alumnoUno=new Alumno('Pedro',25); //Instanciamos el objeto
const alumnoDos=new Alumno('Andrés',27)
console.log(alumnoUno)
console.log(alumnoDos.edad)
console.log(alumnoDos.Opositor())

console.log(alumnoUno.toString()) // devuelve el tipo
console.log(alumnoUno.valueOf())  // devuelve el valor