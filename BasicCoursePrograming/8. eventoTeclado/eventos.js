var teclas = {
    IZQUIERDA: 37,
    ARRIBA: 38,
    DERECHA: 39,
    ABAJO: 40
}

console.log(teclas)

document.addEventListener('keyup', dibujarTeclado);

/*flechas keyCode 37-40, si pones parametro se obtine datos de cualquier evento
keydown hay un error que al mantener pulsado sigue hasta el infinito
keyup solo cuando se suelta la tecla*/

function dibujarTeclado(evento){
    //console.log("tecla oprimida ");
    //console.log(evento.keyCode);

    /*if(evento.keyCode==teclas.ARRIBA){
        console.log('arriba')
    }*/

    switch (evento.keyCode){
        case teclas.ARRIBA:
            console.log("Arriba");
            break;
        case teclas.ABAJO:
            console.log("Abajo");
            break;
        case teclas.IZQUIERDA:
            console.log("Izquierda");
            break;
        case teclas.DERECHA:
            console.log("Derecha");
            break;
        default:
            console.log('Otra Tecla que no es flecha')
            break;
    }
}