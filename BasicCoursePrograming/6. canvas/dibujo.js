var d=document.getElementById("dibujito");
var lienzo=d.getContext("2d");

lienzo.beginPath();
lienzo.strokeStyle="red";//atributo color del canvas 
lienzo.moveTo(50,100);//mover el lapiz a donde va a comer la cajada del lienzo
lienzo.lineTo(250,2);//trazar la linea
lienzo.stroke();//dibujar el trazo 
lienzo.closePath();//cerramos el trazo