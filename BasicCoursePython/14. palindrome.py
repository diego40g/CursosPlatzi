def palindromo(palabra):
    palabra=palabra.replace(' ','')
    palabra=palabra.upper()
    return palabra==palabra[::-1]


def run():
    palabra=input("Escribe una palabra: ")
    es_palindromo=palindromo(palabra)
    if es_palindromo:
        print('Es palíndromo')
    else:
        print('No es palíndromo')


if __name__ == '__main__':
    run()
