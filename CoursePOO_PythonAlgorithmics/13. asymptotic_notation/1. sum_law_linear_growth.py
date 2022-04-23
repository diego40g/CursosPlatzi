# Ley de la suma "tiene un crecimiento lineal respecto de n"
def f(n):
    for i in range(n):
        print(i)
    
    for i in range(n):
        print(i)
#O(n)+O(n) = O(n+n) = O(2n) = O(n)

if __name__=="__main__":
    f(10)