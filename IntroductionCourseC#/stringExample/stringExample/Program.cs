using System;

namespace StringExample
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("¿Cual es tu nombre? Escribe tu nombre completo porfavor");
            //var fullUserName = Console.ReadLine();
            string fullUserName = Console.ReadLine();

            Console.WriteLine("Bienvenido " + fullUserName + " esto es Platzi");
        }
    }
}