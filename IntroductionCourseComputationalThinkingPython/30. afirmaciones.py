#asser <expresion booleana>, <mensake de error>

def primera_letra(lista_de_palabras):
    primeras_letra=[]

    for palabra in lista_de_palabras:
        try:
            assert type(palabra)==str, f'{palabra} no es es in String'
            assert len(palabra)>0, 'No se permite string vacios'
            primeras_letra.append(palabra[0])
        except AssertionError as e:
            print(e)

    return primeras_letra

if __name__ == "__main__":
    lista=['Diego',5.5,'',2,'4513215',0.35]

    print('Primeras letras validas son: ', primera_letra(lista))