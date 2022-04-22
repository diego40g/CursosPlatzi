def funcion_decorator(funcion):
    def wrapper():
        print("Este es el último mensaje...")
        funcion()
        print("Este es el primer mensaje :)")
    return wrapper()

def zumbido():
    print("Buzzzzzzzz")

if __name__=="__main__":
    zumbido=funcion_decorator(zumbido)