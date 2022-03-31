#nombre en mayusculas es una costante que no pensamos variar
#'name': 'Facundo',
#'age': 72,
#'organization': 'Platzi',
#'position': 'Technical Coach',
#'language': 'python',
from pkg_resources import WorkingSet


DATA = [
    {
        'name': 'Facundo',
        'age': 72,
        'organization': 'Platzi',
        'position': 'Technical Coach',
        'language': 'python',
    },
    {
        'name': 'Luisana',
        'age': 33,
        'organization': 'Globant',
        'position': 'UX Designer',
        'language': 'javascript',
    },
    {
        'name': 'Héctor',
        'age': 19,
        'organization': 'Platzi',
        'position': 'Associate',
        'language': 'ruby',
    },
    {
        'name': 'Gabriel',
        'age': 20,
        'organization': 'Platzi',
        'position': 'Associate',
        'language': 'javascript',
    },
    {
        'name': 'Isabella',
        'age': 30,
        'organization': 'Platzi',
        'position': 'QA Manager',
        'language': 'java',
    },
    {
        'name': 'Karo',
        'age': 23,
        'organization': 'Everis',
        'position': 'Backend Developer',
        'language': 'python',
    },
    {
        'name': 'Ariel',
        'age': 32,
        'organization': 'Rappi',
        'position': 'Support',
        'language': '',
    },
    {
        'name': 'Juan',
        'age': 17,
        'organization': '',
        'position': 'Student',
        'language': 'go',
    },
    {
        'name': 'Pablo',
        'age': 32,
        'organization': 'Master',
        'position': 'Human Resources Manager',
        'language': 'python',
    },
    {
        'name': 'Lorena',
        'age': 56,
        'organization': 'Python Organization',
        'position': 'Language Maker',
        'language': 'python',
    },
]


def run():
    #list comprehension
    all_platzi_workers=[worker["name"] for worker in DATA if worker["organization"]=="Platzi"]
    all_python_dev=[worker["name"] for worker in DATA if worker["language"]=="python"]
    print(all_platzi_workers)
    print(all_python_dev)

    #filter
    adults=list(filter(lambda worker: worker["age"]>=18, DATA))##todos los datos del empleado
    print(adults)
    #map
    adults=list(map(lambda worker:worker["name"],adults))
    print(adults)

    #agregar una llave para old que sera un boolean
    #sumar diccionarios < 3.9 y >3.5
    #old_people = list(map(lambda worker: {**worker, **{"old": worker["age"] > 70}}, DATA))
    #usar | es para sumar diccionarios solo a apartir de python >3.9
    old_people=list(map(lambda worker:worker | {"old": worker["age"]>=70},DATA))
    print(old_people)

if __name__=="__main__":
    run()