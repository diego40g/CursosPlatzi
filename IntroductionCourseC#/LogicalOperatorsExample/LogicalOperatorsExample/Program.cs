// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

bool value1 = true;
bool value2 = true;
bool value3 = false;

/* && --> AND
    1  1  =  1      1  1  1 = 1
    1  0  =  0                0
    0  1  =  0                0
    0  0  =  0                0
*/
Console.WriteLine("Valor logico AND (&&): " + (value1 && value2 && value3));

/* || --> OR
    1  1  =  1      1  1  1  = 1
    1  0  =  1                 1
    0  1  =  1                 1
    0  0  =  0      0  0  0  = 0
*/
Console.WriteLine("Valor logico OR (||): " + (value1 || value2 || value3));

// ! --> NOT
Console.WriteLine("Valor logico negación (!): " + !value1);