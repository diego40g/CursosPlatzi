def conversor(tipo_peso,valor_dolar):
    pesos=input("¿Cuántos pesos " +tipo_peso+ " tienes?: ")
    pesos=float(pesos)
    dolares=pesos/valor_dolar
    dolares=round(dolares,2)
    dolares=str(dolares)
    print("Tienes $"+dolares+" dólares")

menu = """
Bienvenido al conversor de monedad 💰
1. Pesos colombianos
2. Pesos argentinos
3. Pesos mexicanos

Elegir una opción: """

opcion = int(input(menu))

if opcion==1:
    conversor("Colombianos",3875)
elif opcion==2:
    conversor("Argentinos",65)
elif opcion==3:
    conversor("Mexicanos",24)
else:
    print('Ingrese una opcion correcta del 1 al 3')