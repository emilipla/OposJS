function maxi (x,y){
    if (x > y) {
        return x
    } else {
        return y
    }
}
var a, b, c, d;
a = parseInt(prompt ("Argumento a:"))
b = parseInt(prompt ("Argumento b:"))
alert ("Máximo:" + maxi(a,b))
/*document.getElementById("boton1").onclick = function(){
    alert ("Máximo: " + maxi(a,b))
}*/
c = parseInt(prompt ("Argumento c:"))
d = parseInt(prompt ("Argumento d:"))
document.write("Máximo: " + maxi (c,d))
/*document.getElementById("boton1").onclick = function(){
        alert ("Máximo: " + maxi(c,d))
}  */  

