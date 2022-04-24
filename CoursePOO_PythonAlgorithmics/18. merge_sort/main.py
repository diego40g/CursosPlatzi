import random
from merge_sort import ordenamiento_por_mezcla

def run():
    tamanio_de_lista=int(input("De que tamaño sera la lista? "))

    lista=[random.randint(0,100) for i in range (tamanio_de_lista)]
    print(lista)
    print('-'*20)

    lista_ordenada=ordenamiento_por_mezcla(lista)
    print(lista_ordenada)

if __name__=="__main__":
    run()