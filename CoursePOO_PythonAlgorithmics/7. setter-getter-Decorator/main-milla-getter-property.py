from milla_getter_setter_property import Millas

def run():
    #Creamos un nuevo objeto
    avion=Millas()
    #Indicamos la distancia
    avion._distancia=200
    #Obtenemos us atributo distancia
    print(avion.definir_distancia)

if __name__=="__main__":
    run()