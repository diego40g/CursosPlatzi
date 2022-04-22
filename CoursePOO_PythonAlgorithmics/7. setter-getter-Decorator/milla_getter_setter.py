class Millas:
    def __init__(self,distancia=0):
        self._distancia=distancia

    def convertir_a_kilometros(self):
        return (self._distancia*1.609344)

    #Método Getter
    def obtener_distancia(self):
        return self._distancia

    #Método Setter
    def definir_distancia(self,valor):
        if valor<0:
            raise ValueError("No es posible convertir distancias menores a 0.")
        self._distancia=valor