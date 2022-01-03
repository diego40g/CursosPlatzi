class Billete{
    constructor(valor,cantidad){
        this.valor=valor;
        this.cantidad=cantidad;
    }
}

var entregado=[];
var caja=[];
caja.push(new Billete(125,10));
caja.push(new Billete(50,10));
caja.push(new Billete(20,30));
caja.push(new Billete(10,10));
caja.push(new Billete(5,10));

var dinero;
var div;
var papeles;

var boton=document.getElementById("retirar");
var resultado=document.getElementById("resultado")
boton.addEventListener("click", entregarDinero);

function entregarDinero(){
    var t=document.getElementById("dinero");
    resultado.innerHTML="";
    dinero=parseInt(t.value);
    for(var bi of caja){
        if(dinero>0){
            div=Math.floor(dinero/bi.valor);
            if(div>bi.cantidad){
                papeles=bi.cantidad;
            }else{
                papeles=div;
            }
            entregado.push(new Billete(bi.valor,papeles));
            dinero=dinero-(bi.valor*papeles);
        }
    }
    if(dinero==0)
    {
        for(var e of entregado){
            if(e.cantidad!=0){
                resultado.innerHTML+=e.cantidad+" billetes de $"+e.valor+"<br/>";
            }
        }
    }else{
        resultado.innerHTML="Soy un cajero pobre y no tengo suficiente dinero :'(";
    }
}