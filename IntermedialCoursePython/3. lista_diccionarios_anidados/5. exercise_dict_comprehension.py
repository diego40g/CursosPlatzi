#Create a dictionary comprehension who key is first 1000 numbers and value square root of number

def run():
    squaredRoot={i:round(i**(0.5),2) for i in range (1,1001)}
    print(squaredRoot)

if __name__=="__main__":
    run()