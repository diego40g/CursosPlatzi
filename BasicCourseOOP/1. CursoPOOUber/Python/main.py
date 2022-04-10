from car import Car

if __name__ == "__main__":
    car=Car()
    car.license="PTD9631"
    car.driver="Pedro Rosero"
    print(vars(car))
    car2=Car()
    car2.license="PGV4126"
    car2.driver="Juan Perez"
    print(vars(car2))