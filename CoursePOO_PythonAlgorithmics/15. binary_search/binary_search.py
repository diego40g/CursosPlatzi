def busqueda_binaria(lista, comienzo, final, objetivo,iter_bin=0):
    print(f'Buscando {objetivo} entre {lista[comienzo]} y {lista[final-1]}')
    iter_bin+=1
    if comienzo>final:
        return (False, iter_bin)
    ##// divicion de enteros
    medio=(comienzo+final)//2

    if lista[medio]==objetivo:
        return (True, iter_bin)
    elif lista[medio]<objetivo:
        return busqueda_binaria(lista,medio+1,final,objetivo,iter_bin)
    else:
        return busqueda_binaria(lista,comienzo,medio-1,objetivo,iter_bin)