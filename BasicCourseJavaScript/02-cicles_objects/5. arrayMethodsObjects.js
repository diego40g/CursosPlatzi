const articulos = [
    {nombre:"Bici",costo:3000},
    {nombre:"TV",costo:2500},
    {nombre:"Libro",costo:320},
    {nombre:"Celular",costo:10000},
    {nombre:"Laptop",costo:20000},
    {nombre:"Laptop",costo:15000},
    {nombre:"Teclado",costo:500},
    {nombre:"Audifonos",costo:1700}
]

//filter
//articulos con costo menor o igual a 500
const articulosFiltrados=articulos.filter((articulos)=>{
    return articulos.costo<=500
})

//map
//devuelve cierto atributo de todos los atributos
const nombreArticulo=articulos.map((articulos)=>{
    return articulos.nombre
})

//find
//devuelve la primera coincidencia 
const encuentraArticulo=articulos.find((articulo)=>{
    return articulo.nombre==="Laptop"
})

//forEach
//bucle dentro de todo los articulos, usado para filtrar propiedades o valores
articulos.forEach((articulo)=>{
    console.log(articulo.nombre)
    if(articulo.nombre==="Laptop"){
        console.log("laptop")
    }
})

//some
//Devuelve true o false que devuelve si existe o cumple la condición
const articulosBaratos=articulos.some((articulo)=>{
    return articulo.costo<=3000
})