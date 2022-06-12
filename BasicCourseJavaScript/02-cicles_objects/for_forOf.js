var estudiantes=["Diego","Susana","Enrique","Lucía"];

/*por indices*/
for (var i=0; i<estudiantes.length; i++){
    saludarEstudiante(estudiantes[i]);
}
/*por objetos*/
for (var estudiante of estudiantes){
    saludarEstudiante(estudiante)
}

function saludarEstudiante(estudiante){
    console.log(`Hola, ${estudiante}`);
}
