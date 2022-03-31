def palindrome(string):
    return string==string[::-1]

if __name__=="__main__":
    try:
        print(palindrome(1))
    except TypeError:
        print("Solo se puede ingresar strings")