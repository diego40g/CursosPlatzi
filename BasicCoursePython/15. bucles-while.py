"""def run():
    contador=0
    print('2 elevado a '+str(contador)+' es igual a '+str(2**contador))
    contador=1
    print('2 elevado a '+str(contador)+' es igual a '+str(2**contador))
"""
"""def run():
    contador=1
    while(contador<=1000):
        print(contador)
        contador+=1"""
        

def run():
    #declaracion de contante
    LIMITE=1000000
    contador=0
    potencia_2=2**contador
    while potencia_2<LIMITE:
        print('2 elevado a '+str(contador)+' es igual a '+str(potencia_2))
        contador+=1
        potencia_2=2**contador


if __name__ == "__main__":
    run()