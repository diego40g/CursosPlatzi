from car import Car

class UberVan(Car):
    typeCarAccepted=[]
    seatsMaterial=[]

    def __init__(self,license,driver,typeCarAccepted,seatsMaterial):
        super(UberVan,self).__init__(license,driver)
        self.typeCarAccepted=typeCarAccepted
        self.seatsMaterial=seatsMaterial
        