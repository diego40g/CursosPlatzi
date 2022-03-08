#range(comienzo,fin,pasos)
my_range=range(1,5)
print(type(my_range))

#es no inclusivo no tenemos el numero final es decir el cinco
for i in my_range:
    print(i)

#GEneran la misma secuencia de valores
my_range=range(0,7,2)
my_other_range=range(0,8,2)
#comparación de igualdad valores
print(my_range==my_other_range)
for i in my_range:
    print(i)

for i in my_other_range:
    print(i)

#identificador para variables
print(id(my_range))
print(id(my_other_range))

#comapracion de igualdad dentro de objetos
print(my_range is my_other_range)

#generar numeros pares
for i in range(0,101,2):
    print(i)