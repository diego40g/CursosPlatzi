my_dicc={
    'Diego':24,
    'Ignacio':22,
    'Ismael':21
}

print(my_dicc['Diego'])

#error y muere el programa
#print(my_dicc['Isma'])
#para evitar se usa que si no encuentra devuelva cierto valor
print(my_dicc.get('Isma',30))
print(my_dicc.get('Ismael',30))

#cambiar valor del diccionario
my_dicc['Diego']=10
print(my_dicc)
#agregar dato al diccionario
my_dicc['Pedro']=70
print(my_dicc)
#eliminar elemento diccionario
del my_dicc['Ignacio']
print(my_dicc)

#recorrer diccionario que devuelve las llaves
for llave in my_dicc.keys():
    print(llave)
#recorrer diccionario que devuelve los valores
for valor in my_dicc.values():
    print(valor)
#recorrer por llave y valor
for llave, valor in my_dicc.items():
    print(f"Llave={llave} Valor={valor}")

#Queremos saber si existe la llave en un diccionario
print('Tom' in my_dicc)
print("Diego" in my_dicc)