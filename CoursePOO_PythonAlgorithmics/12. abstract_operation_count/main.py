def f(x):
    respuesta=0                 #1
    for i in range(1000):       #1000
        respuesta=+1
    for i in range(x):          #x
        respuesta+=1
    for i in range(x):          #2x^2
        for j in range(x):
            respuesta+=1
            respuesta+=1
    return respuesta            #1
                                #1002+x+2x^2

def run():
    print(f(10))

if __name__=="__main__":
    run()