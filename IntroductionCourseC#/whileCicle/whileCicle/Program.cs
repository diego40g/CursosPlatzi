using System;

namespace whileCicle
{
    public class Program
    {
        static void Main(string[] args)
        {
            bool continuarPrograma = true;
            while (continuarPrograma == true)
            {
                Console.WriteLine("¿Desea continuar la ejecucion?\nEscribe 1 para si 0 para no.");
                int ejecucionPrograma=Convert.ToInt16(Console.ReadLine());
                if(ejecucionPrograma == 1)
                {
                    Console.WriteLine("El programa seguira ejecutandose");
                }
                else if (ejecucionPrograma == 0) 
                {
                    Console.WriteLine("Es la ultima vez que el programa se a ejecutado");
                    continuarPrograma = false;
                }
                else
                {
                    Console.WriteLine("La instrucción ingresada no es valida");
                }
                Console.WriteLine("Mensaje por siempre");
            }

            /*Do while por lo menos se ejecuta 1 vez*/
            bool condicionDoWhile = false;
            do
            {
                Console.WriteLine("¿Desea continuar la ejecucion?\nEscribe 1 para si 0 para no.");
                int ejecucionPrograma = Convert.ToInt16(Console.ReadLine());
                if (ejecucionPrograma == 1)
                {
                    Console.WriteLine("El programa seguira ejecutandose");
                    condicionDoWhile = true;
                }
                else if (ejecucionPrograma == 0)
                {
                    Console.WriteLine("Es la ultima vez que el programa se a ejecutado");
                    condicionDoWhile = false;
                }
                else
                {
                    Console.WriteLine("La instrucción ingresada no es valida");
                }
                Console.WriteLine("Mensaje por siempre");
            } while (condicionDoWhile == true);
        }
    }
}