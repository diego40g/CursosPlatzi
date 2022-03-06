def fibonacci(n):
    """Calculo de n termino de la serie de fibonnacci 
        n int>0
        returns el valor n de la serie"""
    if n==0 or n==1:
        return 1
    else:
        return fibonacci(n-1)+fibonacci(n-2)

if __name__=="__main__":
    n=int(input("Ingrese un numero entero:"))
    print(f'El valor de la {n} de la serie de fibonnacci es {fibonacci(n)}')