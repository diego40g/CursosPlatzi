frutas=['manzana','pera','mango']
print("bucle for")
for fruta in frutas:
    print(fruta)
print("\niteradores")
iterador=iter(frutas)
print(next(iterador))
print(next(iterador))
print(next(iterador))

print("\nEstudiantes")
estudiantes = {
    'mexico': 10,
    'colombia': 15,
    'puerto_rico': 4,
}

print("blucle for directo al diccionario")
for pais in estudiantes:
    print(pais)

print("bucle for a las llaves del diccionario")
for pais in estudiantes.keys():
    print(pais)

print("bucle for a los valores del diccionario")
for numero_de_estudiantes in estudiantes.values():
    print(numero_de_estudiantes)

print("bucle for a los items del diccionario")
for pais, numero_de_estudiantes in estudiantes.items():
    print(pais, numero_de_estudiantes)