def palindromeFun(string):
    return string==string[::-1]

print(palindromeFun('ana'))

palindromeLam=lambda string: string==string[::-1]
print(palindromeLam('ana'))