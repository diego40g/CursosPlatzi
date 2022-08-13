using System;

namespace squareArea
{
    class Program
    {
        static void Main(string[] args)
        {
            //calculo area rectangulo

            //valores rectangulo
            float sideA = 10.2365f;
            int sideB = 20;
            sideA++;
            sideA++;
            sideB--;

            //area del rectangula altura*base
            float area = sideA * sideB;
            Console.WriteLine("El área del rectangulo es: " + area);

            /*operadores aritmeticos
             * + suma
             * - resta
             * * multiplicación
             * / division
             * % modulo
             * ++ aumenta 1
             * -- resta 1
             * */
        }
    }
}