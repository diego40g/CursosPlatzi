menu = """
Bienvenido al conversor de monedad 💰
1. Pesos colombianos
2. Pesos argentinos
3. Pesos mexicanos

Elegir una opción: """

opcion = int(input(menu))

if opcion==1:
    pesos=input("¿Cuántos pesos Colombianos tienes?: ")
    pesos=float(pesos)
    valor_dolar=3875
    dolares=pesos/valor_dolar
    dolares=round(dolares,2)
    dolares=str(dolares)
    print("Tienes $"+dolares+" dólares")
elif opcion==2:
    pesos=input("¿Cuántos pesos Argentinos tienes?: ")
    pesos=float(pesos)
    valor_dolar=65
    dolares=pesos/valor_dolar
    dolares=round(dolares,2)
    dolares=str(dolares)
    print("Tienes $"+dolares+" dólares")
elif opcion==3:
    pesos=input("¿Cuántos pesos Argentinos tienes?: ")
    pesos=float(pesos)
    valor_dolar=24
    dolares=pesos/valor_dolar
    dolares=round(dolares,2)
    dolares=str(dolares)
    print("Tienes $"+dolares+" dólares")
else:
    print('Ingrese una opcion correcta del 1 al 3')