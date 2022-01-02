var teclas={
    IZQUIERDA: 37,
    ARRIBA: 38,
    DERECHA: 39,
    ABAJO: 40
}

var vp=document.getElementById("villaPlatzi");
var papel=vp.getContext("2d");

var fondo={
    url:"/assets/tile.png",
    cargarOk:false
};

var xVaca=new Array();
var yVaca=new Array();
var vaca={
    url:"/assets/vaca.png",
    cargarOk:false
};
var xCerdo=new Array();
var yCerdo=new Array();
var cerdo={
    url:"/assets/cerdo.png",
    cargarOk:false
};
var xPollo=new Array();
var yPollo=new Array();
var pollo={
    url:"/assets/pollo.png",
    cargarOk:false
};
var lobo={
    url:"/assets/lobo.png",
    cargarOk:false,
    x:0,
    y:0
};

//crear objetos nuevos
fondo.imagen = new Image();
fondo.imagen.src=fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src=vaca.url;
vaca.imagen.addEventListener("load",cargarVacas);
cerdo.imagen = new Image();
cerdo.imagen.src=cerdo.url;
cerdo.imagen.addEventListener("load",cargarCerdos);
pollo.imagen = new Image();
pollo.imagen.src=pollo.url;
pollo.imagen.addEventListener("load",cargarPollos);
lobo.imagen=new Image();
lobo.imagen.src=lobo.url;
lobo.imagen.addEventListener('load',cargarLobo);
document.addEventListener('keyup',moverLobo);

function cargarFondo(){
    fondo.cargarOk=true;
    dibujar();
}

function cargarVacas(){
    vaca.cargarOk=true;
    dibujar();
}
function cargarCerdos(){
    cerdo.cargarOk=true;
    dibujar();
}
function cargarPollos(){
    pollo.cargarOk=true;
    dibujar();
}
function cargarLobo(){
    lobo.cargarOk=true;
    dibujar()
}
function moverLobo(evento){
    movimiento=40;
    switch (evento.keyCode){
        
        case teclas.ARRIBA:
            console.log("Arriba");
            dibujarLobo(lobo.x,lobo.y,papel);
            lobo.y-=movimiento;
            break;
        case teclas.ABAJO:
            console.log("Abajo");
            dibujarLobo(lobo.x,lobo.y,papel);
            lobo.y+=movimiento;
            break;
        case teclas.IZQUIERDA:
            console.log("Izquierda");
            dibujarLobo(lobo.x,lobo.y,papel);
            lobo.x-=movimiento;
            break;
        case teclas.DERECHA:
            console.log("Derecha");
            dibujarLobo(lobo.x,lobo.y,papel);
            lobo.x+=movimiento;
            break;
        default:
            console.log('Otra Tecla que no es flecha')
            break;
    }
}

function dibujar(){
    if(fondo.cargarOk&&lobo.cargarOk){
        papel.drawImage(fondo.imagen,0,0);
        papel.drawImage(lobo.imagen,0,0);
    }
    if(vaca.cargarOk){
        var cantidadV=aleatorio(0,7);
        console.log("vacas= "+cantidadV);
        for(var v=0;v<cantidadV;v++){
            var x=aleatorio(0,7);
            var y=aleatorio(0,10);
            xVaca[v]=x*60;
            yVaca[v]=y*60;
            papel.drawImage(vaca.imagen,xVaca[v],yVaca[v]);
        }
    }
    if(cerdo.cargarOk){
        var cantidadC=aleatorio(0,7);
        console.log("cerdos= "+cantidadC);
        for(var c=0;c<cantidadC;c++){
            var x=aleatorio(0,7);
            var y=aleatorio(0,10);
            xCerdo[c]=x*60;
            yCerdo[c]=y*40;
            papel.drawImage(cerdo.imagen,xCerdo[c],yCerdo[c]);
        }
    }
    if(pollo.cargarOk){
        var cantidadP=aleatorio(0,7);
        console.log("pollos= "+cantidadP);
        for(var p=0;p<cantidadP;p++){
            var x=aleatorio(0,7);
            var y=aleatorio(0,10);
            xPollo[p]=x*60;
            yPollo[p]=y*40;
            papel.drawImage(pollo.imagen,xPollo[p],yPollo[p]);
        }
    }
}

function aleatorio(min,max){
    var resultado;
    resultado=Math.floor(Math.random()*(max-min+1))+min;
    return resultado;
}

function dibujarLobo(x,y){
    papel.drawImage(fondo.imagen,0,0);
    for(v=0;v<xVaca.length;v++){
        papel.drawImage(vaca.imagen,xVaca[v],yVaca[v]);
    }
    for(c=0;c<xCerdo.length;c++){
        papel.drawImage(cerdo.imagen,xCerdo[c],yCerdo[c]);
    }
    for(p=0;p<xPollo.length;p++){
        papel.drawImage(pollo.imagen,xPollo[p],yPollo[p]);
    }
    papel.drawImage(lobo.imagen,x,y)
}