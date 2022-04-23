def busqueda_lineal(lista, objetivo):  #O(n)
    match=False
    iter_lineal=0
    for elemento in lista:
        iter_lineal+=1
        if elemento==objetivo:
            match=True
            break
    return (match,iter_lineal)