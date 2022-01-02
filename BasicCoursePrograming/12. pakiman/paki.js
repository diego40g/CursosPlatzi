var imagenes=[];
imagenes["Cauchin"]="/assets/vaca.png";
imagenes["Pokacho"]="/assets/pollo.png";
imagenes["Tocinauro"]="/assets/cerdo.png";

/*
javascript objet notation
var imagenes={
    "Cauchin":"/assets/vaca.png"
}*/

/*var cauchin=new Pakiman("Cauchin",100,30);
var pokacho=new Pakiman("Pokacho",80,50);
var tocinauro=new Pakiman("Tocinauro",120,40);*/

//console.log(cauchin, pokacho, tocinauro, imagenes);
/*pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();*/

var coleccion=[];
coleccion.push(new Pakiman("Cauchin",100,30));
coleccion.push(new Pakiman("Pokacho",80,50));
coleccion.push(new Pakiman("Tocinauro",120,40));

console.log("for con 'IN'");
for(var p in coleccion){
    console.log(p);
    //coleccion[p].mostrar();
}
console.log("for con 'OF'");
for(var p of coleccion){
    console.log(p);
    p.mostrar();
}


