class Billete{
    constructor(valor,cantidad,imagen){
        this.valor=valor;
        this.cantidad=cantidad;
        this.imagen=imagen;
    }
}

var entregado=[];
var caja=[];
caja.push(new Billete(100,Math.floor(Math.random()*10),"/assets/100.png"));
caja.push(new Billete(50,Math.floor(Math.random()*10),"/assets/50.png"));
caja.push(new Billete(20,Math.floor(Math.random()*10),"/assets/20.png"));
caja.push(new Billete(10,Math.floor(Math.random()*10),"/assets/10.png"));
caja.push(new Billete(5,Math.floor(Math.random()*10),"/assets/5.png"));
caja.push(new Billete(1,Math.floor(Math.random()*10),"/assets/1.png"));

var dinero;
var div;
var papeles;
var total=0;
for (bi of caja){
    total+=bi.cantidad*bi.valor;
}

var totalCaja=document.getElementById("totalCaja");
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
            entregado.push(new Billete(bi.valor,papeles,bi.imagen));
            dinero=dinero-(bi.valor*papeles);
        }
    }
    if(dinero==0)
    {
        for(var e of entregado){
            if(e.cantidad!=0){
                // resultado.innerHTML+=e.cantidad+" billetes de $"+e.valor+"<br/>";
                for(var i=0;i<e.cantidad;i++){
                    resultado.innerHTML+="<img src='"+e.imagen+"' style='width: 150px;'/>";
                }
                total-=e.cantidad*e.valor;
            }
        }
    }else{
        resultado.innerHTML="Soy un cajero pobre y no tengo suficiente dinero :'(";
    }
    mostrarTotalCaja(total);
}

function mostrarTotalCaja(total){
    totalCaja.innerHTML="El total de la caja es $"+total+"<br/>";
}