from encodings import utf_8


def read(name):
    numbers=[]
    with open("./files/"+name,"r", encoding="utf-8") as f:
        for line in f:
            numbers.append(line)
    return numbers
    

def write():
    names=["Diego","Ignacio","Ismael","Lucía","Susana","Ana"]
    with open("./files/names.txt","w",encoding="utf_8") as f:#sobrescribe
    #with open("./files/names.txt","a",encoding="utf_8") as f:#agrega al final del archivo
        for name in names:
            f.write(name)
            f.write("\n")

def run():
    #print(read("number.txt"))
    #write()
    print(read("names.txt"))

if __name__=="__main__":
    run()