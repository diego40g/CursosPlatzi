'123'
'123' * 3
'123' + '456'
('Hip'*3)+' '+'Hurra'
f'{"Hip " * 3} Hurra'

my_str='Platzi'
len(my_str)
my_str[0]  #notación indices 
my_str[0:2:1]      #notación rebanadas SLICING [inicio:fin:pasos]
my_str[2:]
my_str[:3]
my_str[:-2]
my_str[::2]

'Yo amo a '+my_str          #imprimir cadena
f'Yo amo a {my_str}'        #imprimir cadena
f'Yo amo a {my_str}, ' * 100  #imprimir 100 veces la cadena

nombre=input("Cual es tu nombre: ")
print(nombre)
print('Tu nombre es',nombre)
print(f'Tu nombre es {nombre}')##imprimri con forma formateada
numero=input("Escribe un numero: ")
print(numero)
print(type(numero))
numero=int(input("Escribe un numero: "))  #se encapsula la funcion entero para transformar el str en numero
print(type(numero))