import random
from bubble_sort import ordenamiento_de_burbuja

def run():
    tamanio_de_lista=int(input("De que tamaño sera la lista? "))

    lista=[random.randint(0,100) for i in range (tamanio_de_lista)]
    print(lista)

    lista_ordenada=ordenamiento_de_burbuja(lista)
    print(lista_ordenada)

if __name__=="__main__":
    run()