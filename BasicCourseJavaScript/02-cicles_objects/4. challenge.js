function auto(marca,modelo,anio){
    this.marca=marca
    this.modelo=modelo
    this.anio=anio
    this.detalle=`Auto ${this.marca} ${this.modelo} ${this.anio}`
}
var autos=[]
bandera=true
while (bandera){
    const message="Función contructora\n1.) Nuevo Auto\n2.) Mostrar Lista\n3.) Salir "
    option_input=window.prompt(message)
    switch (option_input) {
        case '1':
            const marcaM="Ingrese marca del auto"
            marca=window.prompt(marcaM)
            const modeloM="Ingrese modelo del auto"
            modelo=window.prompt(modeloM)
            const anioM="Ingrese el año del auto"
            anio=window.prompt(anioM)
            nuevoAuto=new auto(marca,modelo,anio)
            autos.push(nuevoAuto)
            break;
        case '2':
            var output=""
            for (let i of autos){
                output+=i.detalle+'\n'
            }
            window.alert(output);
            break;
        default:
            bandera=false
            window.alert('Gracias por usar dipaz autos');
            break;
    }
}