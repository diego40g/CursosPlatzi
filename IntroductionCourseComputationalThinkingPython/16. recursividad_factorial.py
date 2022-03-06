import sys

def factorial(n):
    """Calcula el factorial de n.
        n int>0
        returns n!
    """
    #print(n)
    if n==1:#definicion de caso base
        return 1
    else:
        return n*factorial(n-1)

if __name__=="__main__":
    n=int(input('Escribe un entero: '))
    help(factorial)
    #print("pasos del factorial")
    print("El factorial de ",n," es: ")
    print(factorial(n))
    print("Limite de recursividad en python")
    print(sys.getrecursionlimit())