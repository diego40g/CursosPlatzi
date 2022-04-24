from knapsack import morral

def run():
    valores=[60,100,120]
    pesos=[10,20,30]
    tamanio_morral=50
    n=len(valores)

    resultado=morral(tamanio_morral,pesos,valores,n)
    print (resultado)

if __name__=="__main__":
    run()