def morral(tamanio_morral,pesos,valores,n):
    #nos quedamos sin elementos o el morral se lleno
    print(f"n = {n}")
    print(f"tamanio = {tamanio_morral}")
    print(f"peso = {pesos[n-1]}")
    print(f"valores = {valores[n-1]}")
    if n==0 or tamanio_morral==0:
        return 0
    if pesos[n-1]>tamanio_morral:
        return morral(tamanio_morral,pesos,valores,n-1)
    return max(valores[n-1]+morral(tamanio_morral-pesos[n-1],pesos,valores,n-1),#lo agrego sumando el valor y este puede ser cero
                morral(tamanio_morral,pesos,valores,n-1))                       #no lo agrego y veo el siguiente elemento
# la solución siempre escoge de mayor a menor hasta que el morral este lleno
#O(n^n)