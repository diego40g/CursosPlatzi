def func1(un_arg,una_func):
    def func2(otro_arg):
        return otro_arg*2
    valor=func2(un_arg)
    return una_func(valor)

un_arg=1

def cualquier_func(cualquier_arg):
    return cualquier_arg+5

result=func1(un_arg, cualquier_func)
print(result)

#un_arg=1
#Entra en func1
#Entra en func2
#valor=1*2
#entra a caulquier_func declarada en func1
#resultado=2+5