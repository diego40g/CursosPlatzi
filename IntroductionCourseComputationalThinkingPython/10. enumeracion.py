#adivina cual es la raiz de un número exacto con ENUMERACIÓN EXAUSTIVA
objetivo=int(input('Escoge un entero: '))
respuesta=0

while respuesta**2<objetivo:
    respuesta+=1

if respuesta**2==objetivo:
    print(f'La raiz cuadrada de {objetivo} es {respuesta}')
else:
    print((f'{objetivo} no tiene una raiz cuadrada exacta'))