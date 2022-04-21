def presentarse(nombre):
    return f"Me llamo {nombre}"

def estudimos_juntos(nombre):
    return f"¡Hey {nombre}, aprendamos Python!!!"

def consume_funciones(funcion_entrada):
    return funcion_entrada("Diego")

def run():
    print(consume_funciones(presentarse))

    print(consume_funciones(estudimos_juntos))

if __name__=="__main__":
    run()