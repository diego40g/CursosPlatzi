<?php
function placesRecommendation($condicion='',$pregunta=''){
    $clima=array("Bogota"=>"frio","Monteria"=>"caliente","Medellin"=>"templado");
    $ubicacion=array("Guajira"=>"norte","Leticia"=>"sur","Santander"=>"este","Antioquia"=>"oeste");
    $turismo=array("Santa Maria"=>"mar","Villavicencio"=>"vegetación","Riohacha"=>"desierto","Quindio"=>"valle");

    switch($condicion){
        case "clima":
            $search=$clima;
            break;
        case "ubicacion":
            $search=$ubicacion;
            break
        case "turismo":
            $search=$turismo;
            break
        default:
            echo"Bienvenido a Colombia!!!";
    }
    echo "El lugar perfecto para ti es ".array_search($pregunta,$search);
}

placesRecommendation("clima","frio");
?>