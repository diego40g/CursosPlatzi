// Javascript

/**
* Paises es un objeto. Pais es la llave.
* Codigo con el principio LBYL.
*/
function buscaPais(paises, pais) {
    if(!Object.keys(paises).includes(pais)) {
      return null;
    }
  
    return paises[pais];
  }

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

    console.log(paises,'Ecuador')