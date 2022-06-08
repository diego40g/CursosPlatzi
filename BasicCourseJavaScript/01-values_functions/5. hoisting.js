//Hoisting into Vars
console.log(myName); //undefined
var myName="Diego Paz";

var myAge=undefined;
console.log(myAge+"soy ese Hoisting"); //undefined
myAge="24";

//Hoisting into functions
//las funciones deben ser declaradas al inicio
hey();
//las funciones pueden estar al final
function hey(){
    console.log("Hola "+myFirstName);//Hola undefined
}
var myFirstName="Diego";