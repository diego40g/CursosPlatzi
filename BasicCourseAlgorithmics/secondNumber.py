print("""El programa busca el primer y segundo numero mayor dentro de un arreglo""")
arreglo=[69,666,1,8,10,-9,-500,0,50]

numMayor1=arreglo[0]
numMayor2=arreglo[1]

if numMayor1 < numMayor2:
  auxiliar=numMayor1
  numMayor1=numMayor2
  numMayor2=auxiliar

i=2
while i<len(arreglo):
  if arreglo[i] > numMayor2:
    if numMayor2 > numMayor1: 
      numMayor1=arreglo[i]
    else:
      numMayor2=arreglo[i]  
  i+=1

print(numMayor1)
print(numMayor2)