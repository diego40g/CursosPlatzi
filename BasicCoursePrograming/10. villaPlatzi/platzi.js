var z;

for(i=0;i<10;i++){
    z=aleatorio(5,0);
    document.write(z+', ');
}

function aleatorio(min,max){
    var resultado;
    resultado=Math.floor(Math.random()*(max-min+1))+min;
    return resultado;
}