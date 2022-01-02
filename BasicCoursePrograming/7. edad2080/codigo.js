var edad_ingresada=document.getElementById("edad_ingresada");
var date=new Date();
var año_Actual= date.getFullYear();
var res=document.getElementById("respuesta")
var boton=document.getElementById("botoncito");
boton.addEventListener("click", calcularEdad);

function calcularEdad(){
    var edad_futura=2080-año_Actual+parseInt(edad_ingresada.value);
    document.getElementById("respuesta").innerHTML="<h3>Tu edad sera "+edad_futura+" años</h3>";
}