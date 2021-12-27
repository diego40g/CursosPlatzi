console.log("El programa busca el primer y segundo numero mayor dentro de un arreglo")
var arreglo = new Array(19,66,10,-18,-20,11,85)
var numMayor1 = arreglo[0]
var numMayor2 = arreglo[1]

for (var i=2; i<arreglo.length; i++){
  if(arreglo[i]>numMayor2){
    if(numMayor2>numMayor1){
      numMayor1=arreglo[i]
    }else{
      numMayor2=arreglo[i]
    }
  }
}

if(numMayor2>numMayor1){
  let auxiliar = numMayor1
  numMayor1 = numMayor2
  numMayor2 = auxiliar
}

console.log(numMayor1)
console.log(numMayor2)