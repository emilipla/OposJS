//Visualización del nombre del script 
//alert("Ejmes.js");
//Declaración de variables locales 
var mes;
//Introducir el número  de mes
mes = parseInt(prompt("Número del mes (1 a 6) :"));
//Visualización del resultado 
switch (mes) {
	case 1:
		document.write("Mes nº" + mes + ": Enero" );
		break;
	case 2:
		document.write("Mes nº"+ mes + ": Febrero");
		break;
	case 3:
		document.write("Mes nº "+   mes + " : Marzo");
		break;
	case 4:
		document.write("Mes nº "  + mes + " : Abril");
		break;
	case 5:
		document.write("Mes nº " + mes + " : Mayo");
		break;
	case 6:
		document.write("Mes nº " + mes + " : Junio");
		break;
	default:
		document.write("Error de introducción de datos en el nº de mes");
	}