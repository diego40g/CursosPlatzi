from milla_property import Millas

def run():
    #Creamos nuevo objeto
    avion=Millas()

    #Indicamos distancia
    avion.distancia=200

    #Obtenemos atributo distancia
    print(avion.distancia)

if __name__=="__main__":
    run()