var jf=require("johnny-five");
var circuito=new jf.Board();

circuito.on("ready",prender);

function prender(){
    var bombillito=new jf.Led(13);
    bombillito.blink(500);
}