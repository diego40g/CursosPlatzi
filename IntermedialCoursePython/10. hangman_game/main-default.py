import random
import os
def read():
    words=[]
    with open("./archivos/data.txt", "r", encoding="utf-8") as f:
        for line in f:
            words.append(line[:-1])
    return words
def selectRand(words):
    return random.choice(words)
def run():
    words=read()
    key=selectRand(words)
    word=[i for i in key]
    word_empty=["_"for i in range(len(word))]
    count=6
    while  word!=word_empty and count!=0:
        os.system("clear")
        print("Intentos permitidos ",count)
        print(word)
        for i in word_empty:
            print(i,end=" ")
        print()
        while True:
            try:
                letter=input("Ingrese una letra: ")
                if len(letter)>1 or ord(letter) < 96 or ord(letter)> 122:
                    if  ord(letter)!= 241:
                        raise ValueError
                break
            except ValueError:
                print("Solo Ingresar letras ademas una a la vez")
        if letter not in word:
            count=count-1
        for i in range(len(word)):
            if letter==word[i]:
                word_empty[i]=word[i]
    
    os.system("clear")
    if count==0:
        print("OH QUE PENA PERDISTE")
    else:
        print("Felicidades adivinaste la palabra era: ",key)

if __name__=='__main__':
    run()