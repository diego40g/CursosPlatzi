## obtener solo numeros impares
my_list=[1,4,5,6,8,13,19,21]

#list comprehesion
odd=[i for i in my_list if i%2!=0]
print(odd)

#filter, la funcion filter retorna un iterador
odd=list(filter(lambda x:x%2!=0,my_list))
print(odd)