x=0.0
for i in range(10):
    x+=0.1

print('el resultado esperado seria 1.0 pero en flotantes no se dara')
if x == 1.0:
    print(f'x={x}')
else:
    print(f'x != {x}')

print('forma correcta de validar flotantes es con rangos')
if x<1.0 and x>0.9999:
    print(f'x={x}')
else:
    print(f'x != {x}')

print('como redondear flotantes dos cifras significativas o decimales')
#round(decimalNumber, significantDigits)
print(round(x,2))