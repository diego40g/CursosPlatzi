#listas
numeros=[1,2,3,4,5]
numeros.append('Hola')
numeros.pop(5)
print('Hola'+' '+'Mundo')
#se puede sumar listas
numeros2=[6,7,8,9]
lista_final=numeros+numeros2
print(lista_final)
print(numeros*5)
#las listas son dinamicas y python necesita usar más memoria 
#las tuplas no
mi_tupla=(1,2,3,4,5)
print(mi_tupla)
# no puedo agregar o eliminar
#mi_tupla.append(5) da error
#mi_tupla.pop(2) da error
#obtener datos es mucho más rapido al ser imutables con datos que no pueden cambiar
for numero in mi_tupla:
    print(numero)

#tuplas imutables
#listas mutables