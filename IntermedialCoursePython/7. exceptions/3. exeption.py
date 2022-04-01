from multiprocessing.sharedctypes import Value


def divisors(num):
    #list comprehensions
    divisors=[i for i in range(1,num+1) if num%i==0]
    return divisors

def run():
    try:
        num=int(input('Ingresa un número: '))
        print(divisors(num))
        print("Termino el programa")
    except ValueError:
        print("Ingresa un numero")

if __name__=="__main__":
    run()
