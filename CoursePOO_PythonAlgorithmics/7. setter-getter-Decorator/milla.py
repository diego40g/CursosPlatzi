class Millas:
    def __init__(self,distancia=0):
        self.distancia=distancia

    def convertir_a_kilimetos(self):
        return (self.distancia*1.609344)