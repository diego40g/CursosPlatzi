using System;

//Ciclo For ejecuta una isntruccion o varias
//cada vez que ejecuta un ciclo

namespace forCicle
{
    public class Program
    {
        static void Main(string[] args)
        {
            /*condicion inicial*/
            /*limite de repeticiones*/
            /*incremento*/
            for (int i=0; i < 5; i++)
            {
                Console.WriteLine($"El numero es #{i}");
            }
            Console.WriteLine("-------------------");
            for (int i = 0; i <= 5; i++)
            {
                Console.WriteLine($"El numero es #{i}");
            }
            Console.WriteLine("-------------------");
            for (int i = 0; i <= 5; i=i+2)
            {
                Console.WriteLine($"El numero es #{i}");
            }
        }
    }
}
