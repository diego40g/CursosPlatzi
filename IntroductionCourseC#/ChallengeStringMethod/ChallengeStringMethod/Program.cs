// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hola, Reto String!");

string fecha = "20/02/2022";

if (fecha.Contains('-'))
{
    Console.WriteLine("La fecha esta separado por el guió medio");
}
if (fecha.Contains('/'))
{
    Console.WriteLine("La fecha esta separado por el slash");
}

string[] split = fecha.Split(new char[] { '/' });

Console.WriteLine($"Día: { split[0]}");
Console.WriteLine($"Mes: { split[1]}");
Console.WriteLine($"Año: { split[2]}");

string aniobisiesto = "2004, 2008, 2012, 2016, 2020, 2024, 2028, 2032, 2036, 2040, 2044, 2048, 2052, 2056, 2060, 2064, 2068, 2072, 2076, 2080, 2084, 2088, 2092, 2096";

for(int i=0; i < aniobisiesto.Length; i++)
{
    if (i.Equals(split[2]))
    {
        Console.WriteLine("El año actual es un año bisiesto");
    }
}

string der = split[0] + split[1] + split[2];
string izq = split[2] + split[1] + split[0];
if (izq.CompareTo(der)==0)
{
    Console.WriteLine("La fecha ingresada se lee igual cambiando el orden del año por el día");
}

if (int.Parse(split[0]) > 32)
{
    Console.WriteLine("Primero ingreso el año");
}
if (int.Parse(split[1]) > 32)
{
    Console.WriteLine("Ingreso en la mitad el año");
}
if (int.Parse(split[2]) > 32)
{
    Console.WriteLine("Ingreso ultimo el año");
}