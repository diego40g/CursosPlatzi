#continue no ejecuta todo lo que esta debajo de el pero sigue el ciclo
#brake corta todo el ciclo
"""def run():
    for contador in range(1000):
        if contador%2!=0:
            continue##salta lo que esta dentro
            print('esto no se va imprimir nunca')
        print(contador)"""


"""def run():
    for i in range(10000):
        print(i)
        if i == 5678:
            break"""

def run():
    texto=input('Escribe un texto: ')
    for letra in texto:
        if letra=='o':
            break
        print(letra)

if __name__ == "__main__":
    run()