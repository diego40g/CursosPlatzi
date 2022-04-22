from milla_getter_setter import Millas

def run():
    avion=Millas()
    avion.definir_distancia(200)
    print(avion.obtener_distancia())
    print(avion._distancia)

if __name__=="__main__":
    run()