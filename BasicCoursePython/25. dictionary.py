def run():
    #llaves o clave y valores
    mi_diccionario={
        'llave1': 1,
        'llave2': 2,
        'llave3': 3,
    }
    print(mi_diccionario)
    print(mi_diccionario['llave1'])
    print(mi_diccionario['llave2'])
    print(mi_diccionario['llave3'])

    poblacion_paises={
        'Argentina': 44938712,
        'Brazil': 210147125,
        'Colombia': 50372424,
    }
    print(poblacion_paises)
    print(poblacion_paises['Argentina'])
    ##Recorrer diccionarios retorno de llaves
    for pais in poblacion_paises.keys():
        print(pais)
    ##Recorrer diccionarios retorno devalores
    for poblacion in poblacion_paises.values():
        print(poblacion)
    ##Recorrer diccionarios retorno de llave y valor
    for pais,poblacion in poblacion_paises.items():
        print(pais+' tiene '+str(poblacion)+' habitantes')

if __name__=='__main__':
    run()