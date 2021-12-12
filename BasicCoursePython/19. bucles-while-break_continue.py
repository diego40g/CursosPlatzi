def run():
    contador=0
    while True:
        contador+=1
        if(contador%10!=0):
            continue
        if(contador==1000):
            break
        print(contador)


if __name__ == "__main__":
    run()