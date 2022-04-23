from rectangle_father import Rectangulo
from square_son import Cuadrado


def run():
    rectangulo=Rectangulo(base=3,altura=4)
    print(rectangulo.area())

    cuadrado=Cuadrado(lado=2)
    print(cuadrado.area())


if __name__=="__main__":
    run()