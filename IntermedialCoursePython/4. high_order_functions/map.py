#a una lista quiero elevar al cuadrado los numeros
my_list=[1,2,3,4,5]

#list comprehensions
squares=[i**2 for i in my_list]
print(squares)

#map
squares=list(map(lambda x:x**2, my_list))
print(squares)