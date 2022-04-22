from milla import Millas

def run():
    #creamos nuevo objeto
    avion=Millas()
    #indicamos distancia
    avion.distancia=200
    
    print(avion.distancia)

    #metodo convertir kilometros
    print(avion.convertir_a_kilimetos())

if __name__=="__main__":
    run()