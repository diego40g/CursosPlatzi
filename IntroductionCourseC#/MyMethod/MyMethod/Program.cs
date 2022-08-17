using System;

namespace MyMethod
{
    public class Program
    {
        public void IntegerAddition(int a, int b)
        {
            int addition = a + b;
            Console.WriteLine("El resultado de la suma de " + a + " + " + b + " = " + addition);
        }
        public int IntegerMultiplication(int a,int b)
        {
            int multiplication = a * b;
            return multiplication;
        }
        public static void Main(string[] args)
        {
            Program myProgram = new Program();
            myProgram.IntegerAddition(3, 6);

            int result = myProgram.IntegerMultiplication(12, 5);
            Console.WriteLine("El resultado de la multiplicación de 12 * 5 = " + result);
        }
    }
}
