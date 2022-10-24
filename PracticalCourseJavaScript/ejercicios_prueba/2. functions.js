const names="Diego Ignacio"
const lastnames="Paz Naula"
const completeName=names+' '+lastnames
const nickname="dpaz"

console.log("Mi nombre es "+completeName+", pero prefiero que me llames "+nickname);

function nombreCompleto(nombres, apellidos){
    return nombres+' '+apellidos
}
//parameters
function saludo(name, lastname, nickname){
    const completeNames=nombreCompleto(name, lastname);
    console.log("Mi nombre es "+completeNames+", pero prefiero que me llames "+nickname);
}
//arguments
saludo(names,lastnames,nickname);