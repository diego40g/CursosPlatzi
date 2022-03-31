from numbers import Integral


def divisors(num):
    #list comprehensions
    #divisors=[i for i in range(1,num+1) if num%i==0]
    #for
    divisors=[]
    for i in range(1,num+1):
        if num%i==0:
            divisors.append(i)
    return divisors

def run():
    num=int(input('Ingresa un número: '))
    print(divisors(num))

    print("Termino el programa")

if __name__=="__main__":
    run()
