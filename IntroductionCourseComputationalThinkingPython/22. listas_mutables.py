my_list=[1,2,3]
print(my_list[0])

#notacion slides
my_list[1:]
#añadiendo el valor de 4
my_list.append(4)
print(my_list)

#reasignacion valor 0
my_list[0]='a'
print(my_list)

print(my_list.pop())
print(my_list)

#iterar con un for
for element in my_list:
    print(element)

a=[1,2,3]
#se pensaria que estamos duplicando la lista 
#pero solo se esta apuntando al mismo lugar
b=a

print(id(a))
print(id(b))

c=[a,b]
print(c)

a.append(5)
print(a)

#se muestra que al agregar un valor en A se modifico B y C
print(c)

#clonar usando coamndo list
a=[1,2,3]
print(f"A.- El Id= {id(a)} Contenido = {a}")
b=a
print(f"B.- El Id= {id(b)} Contenido = {b}")
c=list(a)
print(f"C.- El Id= {id(c)} Contenido = {c}")

#clonar con slides
d=a[::]
print(f"D.- El Id= {id(d)} Contenido = {d}")


##list comprehension
my_list=list(range(100))
print(my_list)

double_list=[i*2 for i in my_list]
print(double_list)

pares_list=[i for i in my_list if i%2==0]
print(pares_list)

impares_list=[i for i in my_list if i%2!=0]
print(impares_list)