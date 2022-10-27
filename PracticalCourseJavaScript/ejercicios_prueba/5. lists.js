const objeto = {
    nombre: "diego Paz",
    edad: 25,
    comida_fav:['arroz','vegetales'],
}

function imprimirPrimerElementoArray(arr){
    console.log(arr[0]);
}

function imprimirElemtoPorElementoArray(arr){
    for (let i=0;i<arr.length; i++){
        console.log(arr[i]);
    }
}

function imprimirElementoPorElementoObjeto(obj){
    const arr_keys=Object.keys(objeto)
    const arr_values=Object.values(objeto)
    for (let i=0;i<arr_keys;i++){
        console.log(`${arr_keys[i]}: ${arr_values},`);
    }
}