#funciones como objetos
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

#funciones como estructura de datos
def aplicar_operaciones(num):
    operaciones=[abs,float]
    print(operaciones)
    resultado=[]
    for operacion in operaciones:
        resultado.append(operacion(num))
    return resultado

if __name__=="__main__":
    #funciones como objetos
    nums=[1,2,3]
    print(f"Arreglo original {nums}")
    print(f"Arreglo funcion por dos {aplicar_operacion(multiplicar_por_dos, nums)}")
    print(f"Arreglo funcion mas dos {aplicar_operacion(sumar_dos, nums)}")
    
    #funciones como expresiones
    print("Funciones en expresiones: ")
    sumar=lambda x,y:x+y
    print(f"Variable suma {sumar(2,3)}")

    #funciones como estrucutura de datos
    print(aplicar_operaciones(-3))