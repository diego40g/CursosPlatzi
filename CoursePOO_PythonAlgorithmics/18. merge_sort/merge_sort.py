def ordenamiento_por_mezcla(lista):
    if len(lista)>1:
        medio=len(lista)//2
        izquierda=lista[:medio]
        derecha=lista[medio:]
        print(izquierda,'*'*5,derecha)
        #llamada recursiva en cada mitad
        ordenamiento_por_mezcla(izquierda)
        ordenamiento_por_mezcla(derecha)
        #iteradores para recorrer las 2 sublistas
        i=0
        j=0
        #iterado para la lista principal
        k=0
        while i<len(izquierda) and j<len(derecha):
            print("i y j")
            if izquierda[i]<derecha[j]:
                lista[k]=izquierda[i]
                i+=1
            else:
                lista[k]=derecha[j]
                j+=1
            k+=1

        while i<len(izquierda):
            print("i")
            lista[k]=izquierda[i]
            i+=1
            k+=1
        
        while j<len(derecha):
            print("j")
            lista[k]=derecha[j]
            j+=1
            k+=1
        print(f'izquierda{izquierda}, derecha {derecha}')
        print(lista)
        print('-'*50)
    return lista    
