var express=require("express");
var aplicacion=express();

aplicacion.get('/', inicio);
aplicacion.get('/curso', cursos);

function inicio(peticion, resultado){
    resultado.send("Este es el <strong>HOME</strong>");
}
function cursos(peticion, resultado){
    resultado.send("Esto son los <strong>cursos</strong>");
}

aplicacion.listen(8989);