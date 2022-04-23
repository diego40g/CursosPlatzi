#Ley de la suma "nos interasa el termino más grande" 
#siendo una funcion cuadratica
def f(n):
    for i in range(n):
        print(i)
    
    for i in range(n*n):
        print(i)
#O(n)+O(n*n) = O(n+n^2) = O(n^2)

if __name__=="__main__":
    f(10)