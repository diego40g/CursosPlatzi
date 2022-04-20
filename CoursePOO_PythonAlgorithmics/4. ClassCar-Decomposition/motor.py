class Motor:
    def __init__(self, cilindros, tipo = 'gasolina', nivelGasolina = 46000, temperatura = 0 ): #tipo es un parametro ya definido, se le llama default keyword, se entiende comoo un parametro por defecto.
        self.cilindros = cilindros
        self.tipo = tipo 
        self.nivelGasolina = nivelGasolina
        self.estadoTemperatura = temperatura

    def inyecta_gasolina(self, cantidadGasolina):
        self.nivelGasolina = self.nivelGasolina - cantidadGasolina
    
    def temperatura (self, grados ):
        self.estadoTemperatura = self.estadoTemperatura + grados

    def to_string (self):
        print("\n")
        print(f"nivelGasolina = {self.nivelGasolina} y temperatura = {self.estadoTemperatura}")
        print("\n")
