using System;

public class switchStatement
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Seleccioan una soda: ");
        string caseSwitch = Console.ReadLine();

        switch (caseSwitch)
        {
            case "cola":
                Console.WriteLine("Cola soda - $2 USD");
                break;
            case "limon":
                Console.WriteLine("Limon soda - $1 USD");
                break;
            case "naranja":
                Console.WriteLine("Naranja soda - $1.5 USD");
                break;
            case "manzana":
                Console.WriteLine("Manzana soda - $1 USD");
                break;
            default:
                Console.WriteLine("ERROR: No seleccioanste una soda o ingresaste un valor erroneo.");
                break;

        }
    }
}