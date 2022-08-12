// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hola, Mundo!");

int number1;
int number2;

Console.WriteLine("Ingresa el primer número: ");
number1 = Convert.ToInt32(Console.ReadLine());//Conversión explicita

Console.WriteLine("Ingresa el segundo número: ");
number2 = Convert.ToInt32(Console.ReadLine());//Conversión explicita

int result = number1 * number2;
Console.WriteLine("El resultado es: "+result);