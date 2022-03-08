my_tuple=()
print(type(my_tuple))
my_tuple=(1,'dos',True)
print(my_tuple[0])
print(my_tuple[1])

#QUERE REASIGNAR VALORES
#NO SE PUEDE HACER
#my_tuple[0]=2
my_tuple=(1)
print(type(my_tuple))
my_tuple=(1,)
print(type(my_tuple))

my_other_tuple=(2,3,4)
my_tuple+=my_other_tuple
#se tiene una reasignacion de la tupla
print(my_tuple)

#desenpaquetamos los valores de la tupla
x,y,z=my_other_tuple
print(x)
print(y)
print(z)

def coordenadas():
    return(5,4)

coordenada=coordenadas()
print(coordenada)
x,y=coordenadas()
print("x= ",x,"y=",y)