var d=document.getElementById("dibujito");
var lienzo=d.getContext("2d");

dibujarLinea("pink",10,300,220,10);
dibujarLinea("yellow",300,10,10,220);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final){
    lienzo.beginPath();
    lienzo.strokeStyle=color;//atributo color del canvas 
    lienzo.moveTo(x_inicial,y_inicial);//mover el lapiz a donde va a comer la cajada del lienzo
    lienzo.lineTo(x_final,y_final);//trazar la linea
    lienzo.stroke();//dibujar el trazo 
    lienzo.closePath();//cerramos el trazo
}