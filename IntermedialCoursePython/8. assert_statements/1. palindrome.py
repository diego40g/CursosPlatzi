def palindrome(string):
    assert len(string)>0, "No se puede ingresar una cadena vacía"
    return string==string[::-1]

if __name__=="__main__":
    print(palindrome(""))