import time
import sys

def factorial_iterativo(num):
    respuesta=1
    while num>1:
        respuesta*=num
        num-=1
    return respuesta

def factorial_recursivo(num):
    if num==1:
        return 1
    return num*factorial_recursivo(num-1)
        

def run():
    n=20000
    comienzo=time.time()
    #print(factorial_iterativo(n))
    factorial_iterativo(n)
    final=time.time()
    print(final-comienzo)

    comienzo=time.time()
    #print(factorial_recursivo(n))
    factorial_recursivo(n)
    final=time.time()
    print(final-comienzo)

if __name__=="__main__":
    numero_limite=10000
    #print(f"Recursion {sys.getrecursionlimit()}")
    sys.setrecursionlimit(numero_limite)
    #print(f"Recursion {sys.getrecursionlimit()}")
    run()