class AirBag:

    def __init__(self, estado = "optimo"):
        self.estado = estado

    def activar (self):
        print("SISTEMA DE SEGURAD DE CHOQUES ACTIVADO")
        self.estado = "inhalitado"