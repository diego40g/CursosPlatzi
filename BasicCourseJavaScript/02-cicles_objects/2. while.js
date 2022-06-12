var estudiantes=["Diego","Richard","Lucía","Susana"];

while(estudiantes.length>0){
    console.log(estudiantes);
    var estudiante=estudiantes.shift();
    saludarEstudiante(estudiante);
}

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}