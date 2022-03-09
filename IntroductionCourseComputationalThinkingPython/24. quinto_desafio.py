#dictionary comprehension
my_dict={'Juan' : 20, 'Ana': 30, 'Arturo' : 45}
Nuevo_dict = {k:v for (k,v) in my_dict.items() if v<40}

print(my_dict)
print(Nuevo_dict)

my_dict={'Juan' : 20, 'Ana': 30, 'Arturo' : 45}
Estudiantes_dict = {'Estudiante ' + k:v*2 for (k,v) in my_dict.items()}

print(my_dict)
print(Estudiantes_dict)

#https://www.datacamp.com/community/tutorials/python-dictionary-comprehension