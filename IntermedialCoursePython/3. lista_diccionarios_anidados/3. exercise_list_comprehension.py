#Create a list comprehension, who are multiples of 4, 6 and 9. Only 5 digits

def run():
    number=[i for i in range(0,100000) if i%36==0] #minimo comun multiplo 4=2^2, 6=2*3, 9=3^2 \n mcm=(2^2*3^2)=36
    #print(number) #son muchos numeros
    print(len(number))

if __name__=="__main__":
    run()