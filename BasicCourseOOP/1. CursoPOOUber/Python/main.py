from car import Car
from account import Account
from uberX import UberX
from uberPool import UberPool
from user import User

if __name__ == "__main__":
    # car=Car("PTD9631", Account("Pedro Rosero","1745876523"))
    # print(vars(car))
    # print(vars(car.driver))
    uberX=UberX("PLL","Pedro Rosero","Toyota","Corona")
    print(vars(uberX))
    uberPool=UberPool("PHJ2332","Juan Perez","Ford","Mustan")
    #print(vars(uberPool.driver))

    user=User("Diego Paz","1745878987","diegopaznaula@gmail.com","password")
    print(vars(user))