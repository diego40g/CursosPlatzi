using System;

namespace ArrayProyectDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hola String");

            string[] coffeTypes;
            float[] coffeValues;

            coffeTypes = new string[] { "Express", "Largo", "Filtrado", "Latte" };
            coffeValues = new float[] { 1.2f, 1.5f, 5.0f, 5.5f };

            coffeTypes[1] = "Cargado";

            for(int i=0; i<coffeTypes.Length; i++)
            {
                Console.WriteLine("El café "+coffeTypes[i]+" cuesta $" + coffeValues[i]);
            }
        }
    }
}
