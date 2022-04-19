from person import Persona

def run():
    diego=Persona('Diego',24)
    damian=Persona('Damian',21)

    print(diego.saluda(damian))

if __name__=="__main__":
    run()