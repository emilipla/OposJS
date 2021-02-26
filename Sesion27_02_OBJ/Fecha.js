	// Visualización del nombre del script 
    alert("FECHA_01");

    // Gestión del objeto Date

    // Método getDate -> devuelve el nº del día del mes de la fecha de sistema 
    var fechaDelDia = new Date();
    var diaMes = fechaDelDia.getDate();
    document.write("<br/> Nº del día de la fecha de sistema : " + diaMes);

    // Método getDay -> devuelve el nº del día de la semana (nº de 0 a 6) de la fecha de sistema 
    var fechaDelDia = new Date();
    var diaSemana = fechaDelDia.getDay();
    document.write("<br/> Nº del día de la semana (nº de 0 a 6) de la fecha de sistema : " + diaSemana);

    //Método getMonth -> devuelve el nº del mes (nº de 0 a 11) de la fecha de sistema 
    var fechaDelDia = new Date();
    var mes = fechaDelDia.getMonth();
    document.write("<br/>Nº del mes de la fecha de sistema : " + (mes + 1));

    // Método getFullYear -> devuelve el nº del año en 4 posiciones) de la fecha de sistema 
    var fechaDelDia = new Date();
    var anio = fechaDelDia.getFullYear();
    document.write("<br/>Nº del año de la fecha de sistema : " + anio);

    // Método getHours -> devuelve el nº de la hora  (nº de 0 a 23) de la fecha de sistema 
    var fechaDelDia = new Date();
    var hora = fechaDelDia.getHours();
    document.write("<br/>Nº de la hora  de la fecha de sistema : " + hora);

    // Método getMinutes -> devuelve el nº de la minuto (nº de 0 a 59) de la fecha de sistema 
    var fechaDelDia = new Date();
    var minuto = fechaDelDia.getMinutes();
    document.write("<br/>Nº del minuto de la fecha de sistema : " + minuto);

    // Método getSeconds -> devuelve el nº de la segundo (nº de 0 a 59) 
    var fechaDelDia = new Date();
    var segundo = fechaDelDia.getSeconds();
    document.write("<br/>Nº del segundo de la fecha de sistema : " + segundo);

    // Método setDate -> define un nº de día del mes respecto a la fecha de sistema (el 15 del mes en nuestro caso)
    var fechaDelDia = new Date();
    fechaDelDia.setDate(15);
    document.write("<br/>El 15 del mes correspondiente a la fecha de sistema : " + fechaDelDia);

    // Método setMonth -> define la fecha un mes atrás respecto a la fecha de sistema 
    var fechaDelDia = new Date();
    fechaDelDia.setMonth(fechaDelDia.getMonth() - 1);
    document.write("<br/>Un mes atrás respecto a la fecha de sistema :" + fechaDelDia);

    // Método setFullYear -> define la fecha un año atrás respecto a la fecha de sistema 
    var fechaDelDia = new Date();
    fechaDelDia.setFullYear(fechaDelDia.getFullYear() - 1);
    document.write("<br/>Un atrás respecto a la fecha de sistema :" + fechaDelDia);

    // Método toLocaleDateString -> convierte la fecha de sistema en cadena fecha en versión locale=ES 
    var fechaDelDia = new Date();
    var dateLocale = fechaDelDia.toLocaleDateString();
    document.write("<br/>Fecha de sistema (versión locale=ES) :" + dateLocale);

    // Método toLocaleTimeString -> convierte la fecha de sistema en cadena horas/minutos/segundos en versión locale=ES 
    var fechaDelDia = new Date();
    var horaLocale = fechaDelDia.toLocaleTimeString();
    document.write("<br/>Horas/Minutes/SeGUNDOS (versión locale=ES) :" + horaLocale);

