	// Función abrirVentana 
    function abrirVentana(URL)
    {
        miVentana = window.open(
        URL,"VENTANA_02","width=400,height=200,location=1,titlebar=yes,resizable=yes"
    )
} 

    // Función cerrarVentana 
    function cerrarVentana()
    {
        miVentana.close();
    }
    

    function accederwindowProp() {
		// Acceso a la para accederwindowProp.html
        miVentana = window.open("windowsProp.html", "_self"); 
        // self accede a la ventana en que nos encontramos
	}