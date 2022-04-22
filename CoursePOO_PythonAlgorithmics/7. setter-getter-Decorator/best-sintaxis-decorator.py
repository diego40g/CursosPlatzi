def funcion_decorator(funcion):
    def wrapper():
        print("Este es el último mensaje...")
        funcion()
        print("Este es el primer mensaje :)")
    return wrapper()

@funcion_decorator
def zumbido():
    print("Buzzzzzzzz")

if __name__=="__main__":
    zumbido()