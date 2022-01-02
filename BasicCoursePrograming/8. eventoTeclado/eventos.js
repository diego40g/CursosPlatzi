var teclas = {
    IZQUIERDA: 37,
    ARRIBA: 38,
    DERECHA: 39,
    ABAJO: 40
}

console.log(teclas)

document.addEventListener('keyup', dibujarTeclado);
var cuadrito=document.getElementById('area_de_dibujo');
var papel=cuadrito.getContext("2d");
var x=100;
var y=100;

//dibujarLinea("red",149,149,151,151,papel);

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final,lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle=color;//atributo color del canvas 
    lienzo.lineWidth=3;//ancho de la linea
    lienzo.moveTo(x_inicial,y_inicial);//mover el lapiz a donde va a comer la cajada del lienzo
    lienzo.lineTo(x_final,y_final);//trazar la linea
    lienzo.stroke();//dibujar el trazo 
    lienzo.closePath();//cerramos el trazo
}

/*flechas keyCode 37-40, si pones parametro se obtine datos de cualquier evento
keydown hay un error que al mantener pulsado sigue hasta el infinito
keyup solo cuando se suelta la tecla*/

function dibujarTeclado(evento){
    //console.log("tecla oprimida ");
    //console.log(evento.keyCode);

    /*if(evento.keyCode==teclas.ARRIBA){
        console.log('arriba')
    }*/
    var colorcito="blue";
    movimiento=5;
    switch (evento.keyCode){
        
        case teclas.ARRIBA:
            console.log("Arriba");
            dibujarLinea(colorcito,x,y,x,y-movimiento,papel);
            y-=movimiento;
            break;
        case teclas.ABAJO:
            console.log("Abajo");
            dibujarLinea(colorcito,x,y,x,y+movimiento,papel);
            y+=movimiento;
            break;
        case teclas.IZQUIERDA:
            console.log("Izquierda");
            dibujarLinea(colorcito,x,y,x-movimiento,y,papel);
            x-=movimiento;
            break;
        case teclas.DERECHA:
            console.log("Derecha");
            dibujarLinea(colorcito,x,y,x+movimiento,y,papel);
            x+=movimiento;
            break;
        default:
            console.log('Otra Tecla que no es flecha')
            break;
    }
}