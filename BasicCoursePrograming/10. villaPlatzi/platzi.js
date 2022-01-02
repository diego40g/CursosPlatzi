var vp=document.getElementById("villaPlatzi");
var papel=vp.getContext("2d");

var fondo={
    url:"/assets/tile.png",
    cargarOk:false
};

var vaca={
    url:"/assets/vaca.png",
    cargarOk:false
};
var cerdo={
    url:"/assets/cerdo.png",
    cargarOk:false
};
var pollo={
    url:"/assets/pollo.png",
    cargarOk:false
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

function dibujar(){
    if(fondo.cargarOk==true){
         papel.drawImage(fondo.imagen,0,0);
    }
    if(vaca.cargarOk==true){
        var cantidadV=aleatorio(0,7);
        for(var v=0;v<cantidadV;v++){
            var x=aleatorio(0,7);
            var y=aleatorio(0,10);
            var x=x*60;
            var y=y*60;
            papel.drawImage(vaca.imagen,x,y);
        }
    }
    if(cerdo.cargarOk==true){
        var cantidadC=aleatorio(0,7);
        for(var c=0;c<cantidadC;c++){
            var x=aleatorio(0,7);
            var y=aleatorio(0,10);
            var x=x*60;
            var y=y*40;
            papel.drawImage(cerdo.imagen,x,y);
        }
    }
    if(pollo.cargarOk==true){
        var cantidadP=aleatorio(0,7);
        for(var p=0;p<cantidadP;p++){
            var x=aleatorio(0,7);
            var y=aleatorio(0,10);
            x*=60;
            y*=40;
            papel.drawImage(pollo.imagen,x,y);
        }
    }
}

function aleatorio(min,max){
    var resultado;
    resultado=Math.floor(Math.random()*(max-min+1))+min;
    return resultado;
}