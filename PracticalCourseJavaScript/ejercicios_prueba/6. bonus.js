/**
 * Comparar un objeto con un solo if
 */

const tipoDeSubscripciones={
    free: "Solo puede tomar los cursos gratis.",
    basic: "Puede tomar casi todos los cursos de Platzi durante un mes.",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertDuo: "Tu y alguien más pueden tomar TODOS los cursos de platzo por un año",
}

function conseguitTipoSubscripcion(subscripcion){
    if(tipoDeSubscripciones[subscripcion]){
        console.log(tipoDeSubscripciones[subscripcion]);
    }
    console.log("Ese tipo de subscripción no esta disponible");
}