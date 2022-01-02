var texto=document.getElementById("texto_lineas");
var boton=document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d=document.getElementById("dibujito");
var ancho=d.width;
var lienzo=d.getContext("2d");

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final){
    lienzo.beginPath();
    lienzo.strokeStyle=color;//atributo color del canvas 
    lienzo.moveTo(x_inicial,y_inicial);//mover el lapiz a donde va a comer la cajada del lienzo
    lienzo.lineTo(x_final,y_final);//trazar la linea
    lienzo.stroke();//dibujar el trazo 
    lienzo.closePath();//cerramos el trazo
}

function dibujoPorClick(){
    var lineas=parseInt(texto.value);
    var l=0;
    var yi, xf;
    var colorcito="#FAA"
    var espacio=ancho/lineas;


    /*while(l<lineas){
        l++;*/
    for(l=0;l<lineas;l++){
        xi=l*espacio;
        yi=l*espacio;
        xf=espacio*(l+1);
        yf=espacio*(l+1);
        dibujarLinea(colorcito,0,yi,xf,ancho);
        dibujarLinea(colorcito,xi,ancho,ancho,ancho-yf);
        dibujarLinea(colorcito,0,yi,ancho-xf,0);
        dibujarLinea(colorcito,ancho,yi,xf,0);
        console.log("Linea "+l)
    }

    dibujarLinea(colorcito,1,1,1,299);
    dibujarLinea(colorcito,1,299,299,299);
}