using System;

namespace ReadLine
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Ingresa el valor de la base del rectangulo. \nPuedes usar decimales ','");
            float sideA = float.Parse(Console.ReadLine());
            Console.WriteLine("Ingresa el valor de la altura del rectangulo. \nPuedes usar decimales ','");
            float sideB = float.Parse(Console.ReadLine());

            float result = sideA * sideB;
            Console.WriteLine("El área del rectangulo es: "+result);
        }
    }
}
