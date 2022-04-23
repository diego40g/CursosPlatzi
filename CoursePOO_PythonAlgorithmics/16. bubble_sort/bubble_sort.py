def ordenamiento_de_burbuja(lista):
    n=len(lista)

    #O(n)*O(n) = O(n*n) = O(n^2)
    for i in range(n): #O(n)
        for j in range(0,n-i-1): #O(n)
            if lista[j]>lista[j+1]:
                #suaping
                lista[j],lista[j+1]=lista[j+1],lista[j]
    return lista
