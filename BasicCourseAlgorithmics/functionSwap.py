def swap_text(s):
    result=""
    for letter in s:
        if letter == letter.upper():
            result+=letter.lower()
        else:
            result+=letter.upper()
    print(result)


if __name__=='__main__':
    s=input("Ingresar cadena a cambiar: ")
    swap_text(s)
