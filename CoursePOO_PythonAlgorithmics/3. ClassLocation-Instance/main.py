from location import Coordenada

def run():
    coord_1=Coordenada(3,30)
    coord_2=Coordenada(4,8)

    print(coord_1.distancia(coord_2))

if __name__=="__main__":
    run()