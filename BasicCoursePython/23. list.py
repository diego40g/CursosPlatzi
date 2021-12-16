numero=1
numeros=[1,3,6,8,9,45,90]
print(numeros)

objetos=['hola',3,4.5,True]
print(objetos)
print(objetos[1])
#agregar elemento
objetos.append(False)
print(objetos[4])
objetos.append(1)
print(objetos)
#eliminar elemento
objetos.pop(1)
print(objetos.pop(2))#muestra o retorna el elemento que borre
print(objetos)

#recorrer lista
for elemento in objetos:
    print(elemento)

#puedo usar elementos de arrays
print(objetos[::-1])
print(objetos[1:3])