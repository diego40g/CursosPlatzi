#implementar una función para que le usuario elija que tipo de algoritmo usar
def enumeracion_exhaustiva(numero):
    respuesta=0
    while respuesta**2<numero:
        respuesta+=1

    if respuesta**2==numero:
        print(f'La raiz cuadrada de {numero} es {respuesta}')
    else:
        print((f'{numero} no tiene una raiz cuadrada exacta'))

def aproximacion(numero,epsilon=0.01):
    paso=epsilon**2
    respuesta=0.0

    while abs(respuesta**2-numero)>=epsilon and respuesta<=numero: 
        respuesta+=paso

    if abs(respuesta**2-numero)>=epsilon:
        print(f'No se encontro la raiz cuadrada del {numero}')
    else:
        print(f'La raiz cuadrada de {numero} es {respuesta}')

def busqueda_binaria(numero,epsilon=0.01):
    bajo=0.0
    alto=max(1.0, objetivo)
    respuesta=(alto+bajo)/2

    while abs(respuesta**2-numero)>=epsilon:
        if respuesta**2<numero:
            bajo=respuesta
        else:
            alto=respuesta
        respuesta=(alto+bajo)/2

    print(f'La raiz cuadrada de {numero} es la {respuesta}')

if __name__=="__main__":
    print("Ingrese un entero para mostrar los metodo aproximación.")
    objetivo=int(input('Escoge un entero: '))
    print("Enumeración exhaustiva")
    enumeracion_exhaustiva(objetivo)
    print("Aproximación")
    aproximacion(objetivo)
    print("Busqueda binaria")
    busqueda_binaria(objetivo)