import random
from binary_search import busqueda_binaria
def run():
    tamanio_de_lista=int(input("De que tamaño es la lista?"))
    objetivo=int(input("Que número quieres encontrar?"))

    #sorted ordena la lista
    lista=sorted([random.randint(0,100) for i in range(tamanio_de_lista)])

    (encontrado,iter_bin)=busqueda_binaria(lista,0,len(lista),objetivo)

    print(lista)
    print(f'El elemento {objetivo} {"esta " if encontrado else "no esta"} en la lista')
    print(f"Con un total de {iter_bin} iteraciones")

if __name__=="__main__":
    run()