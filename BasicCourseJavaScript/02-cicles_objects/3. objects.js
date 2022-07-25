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
    
}
