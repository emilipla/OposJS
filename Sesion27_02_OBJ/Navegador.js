function verificarNavegador() {
    var caracteristicasNavigator = "";
    caracteristicasNavigator = "Código del navegador : " + navigator.appCodeName + "<br />";
    caracteristicasNavigator += "Nombre del navegador : " + navigator.appName + "<br />";
    caracteristicasNavigator += "<p>Versión " + navigator.appVersion + "</p>";
    caracteristicasNavigator += "<p>Soporte de las cookies : " + navigator.cookieEnabled + "</p>";
    caracteristicasNavigator += "<p>Sistema operativo : " + navigator.platform + "</p>";
    caracteristicasNavigator += "User-agent header: " + navigator.userAgent + "<br />";
    caracteristicasNavigator += "User-agent language: " + navigator.systemLanguage + "<br />";

    // Visualización de las características del navegador
    document.getElementById("visualizacionInfoNavegador").innerHTML = caracteristicasNavigator;

}