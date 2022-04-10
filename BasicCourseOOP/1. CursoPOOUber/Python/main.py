from car import Car
from account import Account

if __name__ == "__main__":
    car=Car("PTD9631", Account("Pedro Rosero","1745876523"))
    print(vars(car))
    print(vars(car.driver))