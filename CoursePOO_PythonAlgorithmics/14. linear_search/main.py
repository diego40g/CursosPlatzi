import random
from linear_search import busqueda_lineal

def run():
    tamanio_de_lista=int(input("De que tamaño sera la lista? "))
    objetivo=int(input("Que número quieres encontrar? "))

    lista=[random.randint(0,100) for i in range(tamanio_de_lista)]

    (encontrado,iter_lineal)=busqueda_lineal(lista, objetivo)
    print(lista)
    print(f'El elemento {objetivo} {"esta " if encontrado else "no esta"} en la lista')
    print(f"Con un total de {iter_lineal} iteraciones")

if __name__=="__main__":
    run()