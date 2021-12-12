def es_primo(numero):
    contador=0
    for i in range(1,numero+1):
        ##nos saltamos la vuelta del ciclo cuando vale 1 y es igual al numero 
        ##porque los numeros primos son aquellos que son divisibles para q y para si mismos
        if i==1 or i==numero:
            continue
        if numero%i==0:
            contador+=1
    if contador==0:
        return True
    else: 
        return False


def run():
    numero=int(input('Escribe un numero: '))
    if numero==1:
        print('No es primo')
    else:
        if es_primo(numero):
            print('Es primo')
        else:
            print('No es primo')


if __name__ == "__main__":
    run()
