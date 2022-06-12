var frutas=["Manzana","Plátano","Cereza","Fresa"];

console.log(frutas);
console.log(frutas.length);
console.log(frutas[1]);

var masFrutas=frutas.push("Uva");//agrega un elemento al final
console.log(frutas);
console.log(masFrutas);

var ultimaFruta=frutas.pop();//elimina el ultimo elemento del array y lo asigna a nuestra variable ultimaFruta
console.log(frutas);
console.log(ultimaFruta);

var primeraMasFrutas=frutas.unshift("Sandia");
console.log(frutas);
console.log(primeraMasFrutas)


var borrarFruta=frutas.shift("Cereza");//elimina el primer elemento del array y lo asigna en la variable

var unaFruta=frutas.indexOf("Cereza");//devuelve el indice donde esta el elemento dentro del array