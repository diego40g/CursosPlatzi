objetivo=int(input('Escoge un número: '))
epsilon=0.01
bajo=0.0
alto=max(1.0, objetivo)
respuesta=(alto+bajo)/2

while abs(respuesta**2-objetivo)>=epsilon:
    print(f'Bajo={bajo}, Alto={alto}, respuesta={respuesta}')
    if respuesta**2<objetivo:
        bajo=respuesta
    else:
        alto=respuesta

    respuesta=(alto+bajo)/2

print(f'La raiz cuadrada de {objetivo} es la {respuesta}')