var d=document.getElementById("dibujito");
var lienzo=d.getContext("2d");

var lineas=30;
var l=0;
var yi, xf;
var colorcito="#FAA"

/*while(l<lineas){
    l++;*/
for(l=0;l<lineas;l++){
    xi=l*10;
    yi=l*10;
    xf=10*(l+1);
    yf=10*(l+1);
    dibujarLinea(colorcito,0,yi,xf,300);
    dibujarLinea(colorcito,xi,300,300,300-yf);
    dibujarLinea(colorcito,0,yi,300-xf,0);
    dibujarLinea(colorcito,300,yi,xf,0);
    console.log("Linea "+l)
}

dibujarLinea(colorcito,1,1,1,299);
dibujarLinea(colorcito,1,299,299,299);


function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final){
    lienzo.beginPath();
    lienzo.strokeStyle=color;//atributo color del canvas 
    lienzo.moveTo(x_inicial,y_inicial);//mover el lapiz a donde va a comer la cajada del lienzo
    lienzo.lineTo(x_final,y_final);//trazar la linea
    lienzo.stroke();//dibujar el trazo 
    lienzo.closePath();//cerramos el trazo
}