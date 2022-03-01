print("Bienvenido al comparador de edades.")
print("Ahora descubriremos juntos quien tiene mas edad entre dos personas.")
print("Para esto necesitare que me brindes información antes (Soy una computadora, no una adivina... por ahora...)")

nombre_persona_1 = input("Necesito el nombre de la primer persona. ¿Como se llama?: ")
edad_persona_1 = int( input("¿Que edad tiene?: "))
nombre_persona_2 = input("Necesito el nombre de la segunda persona. ¿Como se llama?: ")
edad_persona_2 = int( input("¿Que edad tiene?: "))

print("Despejare la incertidumbre...")

if edad_persona_1 > edad_persona_2:
    print(f"Claro como el agua, {nombre_persona_1} es mayor que {nombre_persona_2}.")
elif edad_persona_1 < edad_persona_2:
    print(f"¡Elemental Watson!, {nombre_persona_2} es mayor que {nombre_persona_1}.")
else:
    print(f"¡Basta de contiendas {nombre_persona_1} y {nombre_persona_2}, ambos tienen la misma edad!")

print("Gracias por usar este programa. ¡Nos vemos la proxima!")