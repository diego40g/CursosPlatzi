x=true;
y=false;
if(x==true){
    alert("x es verdadero");
}
if(!y==true){
    alert("y es falso")
}

estudiante=true;
profesor=false;
visitante=false;
if(estudiante||profesor){
    permiti_entrada();
}else if(visitante){
    dar_tour_guidado();
}else{
    preguntar_que_carajos();
}

gasolina=10;
temperatura=10;
min_gasolina=5;
max_temperatura=45
if(gasolina>min_gasolina&&temperatura<max_temperatura){
    automovil.movimiento=true;
}else{
    automovil.movimiento=false;
}

helado=true;
dulce=false;
if(helado^dulce){
    dar_recompensa(helado,dulce);
}else{
    dar_recompensa(false,false);
}

lluvia=true;
sombrilla=true;
bajo_techo=true;
if(lluvia){
    if(sombrilla^bajo_techo){
        alert("Estás haciendo lo correcto");
    }else{
        alert("Donde te equivocaste");
    }
}else{
    alert("No necesitas sombrilla");
}
