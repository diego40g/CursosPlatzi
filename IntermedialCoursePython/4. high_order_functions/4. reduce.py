#multiplar todos los elementos de una lista y reducirlo a un solo valor
from cv2 import reduce


my_list=[2,2,2,2,2]

#for solution
all_multiplied=1
for i in my_list:
    all_multiplied*=i
print(all_multiplied)

#reduce
from functools import reduce
all_multiplied=reduce(lambda a,b:a*b,my_list)
print(all_multiplied)