from car import Automovil

def run():
    car1 = Automovil("Mustan","Ford", "rojo")
    car1._motor.to_string() 
    car1.acelerar("lenta")
    car1._motor.to_string()
    car1.des_acelerar("choque")

if __name__ == "__main__":
    run()