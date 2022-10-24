const tipoDeSubscripcion="Basic"
switch (tipoDeSubscripcion){
    case "Free":
        console.log("Solo puede tomar los cursos gratis.");
        break;
    case "Basic":
        console.log("Puede tomar casi todos los cursos de Platzi durante un mes.");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertDuo":
        console.log("Tu y alguien más pueden tomar TODOS los cursos de platzo por un año");
        break;
}

if (tipoDeSubscripcion=="Free"){
    console.log("Solo puede tomar los cursos gratis.");
}else if(tipoDeSubscripcion=="Basic"){
    console.log("Puede tomar casi todos los cursos de Platzi durante un mes.");
}else if(tipoDeSubscripcion=="Expert"){
    console.log("Puede tomar casi todos los cursos de Platzi durante un mes.");
}else if(tipoDeSubscripcion=="ExpertDuo"){
    console.log("Puede tomar casi todos los cursos de Platzi durante un mes.");
}
