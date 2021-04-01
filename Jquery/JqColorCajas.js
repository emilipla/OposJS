
   $(document).ready(function()
    { 
        
        //Oculta Cajas visibles:
        $("#boton").click(function(){
            $("div").hide()
        }) 
                         
        // Colorea cajas visibles
        $("#boton1").click(function(){
           $("div:visible").css("background", "#9cf").show()
       }) 

       // Muestra cajas ocultas
        $("#boton2").click(function(){
            $("div:hidden").show()
       }) 
      

    });  
 