from motor import Motor
from airbag import AirBag
class Automovil:
    def __init__(self, modelo, marca, color):
        self.modelo=modelo
        self.marca=marca
        self.color=color
        self._estado="en_reposo"
        self._motor=Motor(cilindros=4)
        self._seguridad=AirBag()

    def acelerar(self,tipo='despacio'):
        if tipo=='rapida':
            self._motor.inyecta_gasolina(10)
            self._motor.temperatura(12)
        else:
            self._motor.inyecta_gasolina(3)
            self._motor.temperatura(7)
        self._estado='en_movimiento'

    def des_acelerar(self,tipo):
        if tipo=="choque":
            self._seguridad.activar()