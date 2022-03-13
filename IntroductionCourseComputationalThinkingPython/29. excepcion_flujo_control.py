def busca_pais(paises, pais):
    """
    Paises es un diccionario. Pais es la llave.
    Codigo con el principio EAFP.
    """

    try:
        return paises[pais]
    except KeyError:
        print('El pais que buscas, no se encuentra en la base de datos')
        return None

if __name__=="__main__":
    paises = {
        'Colombia': 'Bogota',
        'Uruguay': 'Montevideo',
        'España': 'Madrid',
        'Canada': 'Ottawa',
        'Argentina': 'Buenos Aires',
        'Australia': 'Canberra',
        'Bolivia': 'Sucre',
        'Brasil': 'Brasilia',
        'Chile': 'Santiago',
        'Venezuela': 'Caracas',
        'Costa Rica': 'San Jose',
        'Cuba': 'La Habana',
        'Ecuador': 'Quito',
        'Egipto': 'El Cairo',
        'Francia': 'Paris',
        'Filipinas': 'Manilla',
        'India': 'Nueva Delhi',
        'Indonesia': 'Yakarta',
        'Italia': 'Roma',
        'Libano': 'Beirut',
        }
    print('BUSCADOR DE CAPITALES\n')
    pais  = input('Escribe el pais al que desees conocer su capital: ')

print(busca_pais(paises, pais))