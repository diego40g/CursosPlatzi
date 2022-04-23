from rectangle_father import Rectangulo
class Cuadrado(Rectangulo): #clase caudrado extiende al rectangulo
    def __init__(self,lado):
        super().__init__(lado,lado)