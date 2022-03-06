def multiplicar_por_dos(n):
    return n*2

def sumar_dos(n):
    return n+2

def aplicar_operacion(funcion,numeros):
    resultados=[]
    for numero in numeros:
        resultado=funcion(numero)
        resultados.append(resultado)
    return resultados

if __name__=="__main__":
    nums=[1,2,3]
    print(f"Arreglo original {nums}")
    print(f"Arreglo funcion por dos {aplicar_operacion(multiplicar_por_dos, nums)}")
    print(f"Arreglo funcion mas dos {aplicar_operacion(sumar_dos, nums)}")
    