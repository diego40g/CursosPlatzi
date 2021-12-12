def es_primo_mat(numero):
    if numero==2 or numero==3 or numero==5 or numero==7 or numero==11 or numero==13 or numero==37:
        return True
    
    for i in range (0,39):
        if(i<=15):
            primo=i**2+i+17
            print(primo)
            if(primo==numero):
                return True
        primo=i**2+i+41
        print(primo)
        if(primo==numero):
            return True
    return False

def run():
    numero=int(input("Ingrese un numero primo: "))
    if es_primo_mat(numero):
            print('Es primo')
    else:
        print('No es primo')


if __name__=="__main__":
    run()