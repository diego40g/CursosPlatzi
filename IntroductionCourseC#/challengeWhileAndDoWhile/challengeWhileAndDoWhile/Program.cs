//For: imprime 10 veces el siguiente mensaje "Aprendiendo C# con Platzi"
for (int i = 0; i < 10; i++)
{
    Console.WriteLine("Aprendiendo C# con Platzi");
}

//While: imprime "mientras estes aprendiendo c# con platzi"
bool estoyAprendiendo = true;
while (estoyAprendiendo)
{
    Console.WriteLine("Sigues en el curso de c# de Platzi\n1) Para si \n2)Para no");
    int eleccionOpcion = Convert.ToInt16(Console.ReadLine());
    if (eleccionOpcion == 1)
    {
        Console.WriteLine("Mientras estoy aprendiendo c# con Platzi");
    }else if(eleccionOpcion == 2)
    {
        Console.WriteLine("Termine el curso de c# de Platzi con exito :)");
        estoyAprendiendo = false;
    }
    else
    {
        Console.WriteLine("Opcion seleccionada erronea");
    }
}

//Do While: estoy indeciso si estudiar el curso de platzi por eso que la desición sera por cara o sello 
//y no para hasta que cara sea mayor
string decision=null;
List<int> lanzamientos=new List<int>();
Random random = new Random();
do
{
    int veces = 1;
    int probabilidad = random.Next(0,2);//0: cara SI y 1:sello NO
    Console.WriteLine($"Lanza moneda: {probabilidad}, queremos ceros :)");
    lanzamientos.Add(probabilidad);
    if (lanzamientos.Count > veces)
    {
        int cara=0;
        int sello=0;
        for(int i = 0; i < lanzamientos.Count; i++)
        {
            if (lanzamientos[i] == 0)
            {
                cara++;
            }
            else
            {
                sello++;
            }
        }
        if (cara > sello)
        {
            decision = "Lo logramos :)";
        }
    }
    else
    {
        veces++;
    }
    
} while (decision == null);