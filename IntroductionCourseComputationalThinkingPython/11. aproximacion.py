objetivo=int(input('Escoge un número: '))
epsilon=0.01 ##que tan presiso queremos ser
paso=epsilon**2
respuesta=0.0

while abs(respuesta**2-objetivo)>=epsilon and respuesta<=objetivo: ##abs valor absoluto
    respuesta+=paso

if abs(respuesta**2-objetivo)>=epsilon:
    print(f'No se encontro la raiz cuadrada del {objetivo}')
else:
    print(f'La raiz cuadrada de {objetivo} es {respuesta:.2f}')