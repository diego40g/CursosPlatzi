var j=require("johnny-five");
var circuito=new j.Board();//conexio de JS y arduino
var bombillo,mortorcito,celda;
var turno=0;

circuito.on("ready",prender);

function prender(){
    //fotocelda
    var configuracion = {pin:"A0", freq:50};
    celda=new j.Sensor(configuracion);

    bombillo=new j.Led(13);
    bombillo.on();

    mortorcito=new j.Servo(9);
    mortorcito.to(90);

    console.log(celda.value);//valor de la luz no se puede leer por lo rapito que inicia arduino

    ondear();
}

function ondear(){
    console.log("Luz: "+celda.value);//funcion  recursiva de toma de datos
    var luz = celda.value; //entre 40 a 1023 manor a mayor luz
    if(luz>800){
        if(turno==1){
            mortorcito.to(70);
            turno=0;
        }else{
            turno=1;
            mortorcito.to(110);
        }
    }else{
        mortorcito.to(150);
    }
    setTimeout(ondear,1000);//ejecutar la funcion ondear cada segundo
}