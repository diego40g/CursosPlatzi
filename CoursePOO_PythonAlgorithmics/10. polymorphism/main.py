from person import Persona
from cyclist import Ciclista

def main():
    persona=Persona("Diego")
    persona.avanza()

    ciclista=Ciclista("Ismael")
    ciclista.avanza()

if __name__=="__main__":
    main()