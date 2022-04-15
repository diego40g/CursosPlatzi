from Hotel import Hotel
hotel = Hotel(numero_maximo_de_huespedes=50, lugares_de_estacionamiento=20)
print(hotel.lugares_de_estacionamiento)
hotel.anadir_huespedes(3)
hotel.checkout(1)
print(hotel.ocupacion_total()) # 2