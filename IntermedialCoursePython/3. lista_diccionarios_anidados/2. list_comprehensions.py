from re import S


def run():
    squares=[]
    for i in range(1,101):
        if i%3:
            squares.append(i**2)

    print(squares)

def runListComprehension():
    squares=[i**2 for i in range(1,101) if i%3]
    print(squares)

if __name__=="__main__":
    runListComprehension()