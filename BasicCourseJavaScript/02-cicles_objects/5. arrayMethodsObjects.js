const articulos = [
    {nombre:"Bici",costo:3000},
    {nombre:"TV",costo:2500},
    {nombre:"Libro",costo:320},
    {nombre:"Celular",costo:10000},
    {nombre:"Laptop",costo:20000},
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