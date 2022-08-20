using System;

namespace ifStatement
{
    class Program
    {
        static void Main(string[] args)
        {
            int anyValue = 6;
            string message = "";

            if(anyValue == 6)
            {
                message = "O por Dios es un milagro el valor es igual a 6";
            }else if (anyValue == 12)
            {
                message = "O por Dios es un doble milagro el valor es 12";
            }
            else
            {
                message = "Ya nada, el valor no es 6";
            }
            Console.WriteLine($"La respuesta es: {message}");
        }
    }
}