using System;

namespace dataType;

class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Tipos de datos");
        int height = 164;
        int age = 20;
        string name = "Diego Paz";
        string information = "La información solicitada es: \n Nombre de usuario " + name+"\n Edad del usuario "+age+"\n Altura del usuario "+height;

        Console.WriteLine(information);
        
    }
}
