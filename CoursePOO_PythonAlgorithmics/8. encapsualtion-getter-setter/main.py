from site import venv
from casilla_votacion import CasillaDeVotacion

def run():
    casilla=CasillaDeVotacion(123,['Quito','Guayaquil'])
    print(casilla.region)
    casilla.region="Quito"
    print(casilla.region)
    try:
        casilla.region="Lima"
        print(casilla.region)
    except ValueError as ve:
        print(ve)

if __name__=="__main__":
    run()