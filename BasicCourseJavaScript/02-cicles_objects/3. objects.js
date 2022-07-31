var miAuto={
    marca: "Toyota",
    modelo: "Corona",
    anio: 1995,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.anio}`)
    }
}
//consultar atributos del objeto
console.log(miAuto.marca)
console.log(miAuto.anio)
//consultar metodos del objeto
console.log(miAuto.detalleDelAuto())

//función cosntructora
function auto(marca,modelo,anio){
    this.marca=marca
    this.modelo=modelo
    this.anio=anio
}

var autoNuevo = new auto("Ford","Mustang",1972)
var autoNuevo2 = new auto("Tesla","Modelo 3",2020)
var autoNuevo3 = new auto("Toyota","Fortune",2016)
