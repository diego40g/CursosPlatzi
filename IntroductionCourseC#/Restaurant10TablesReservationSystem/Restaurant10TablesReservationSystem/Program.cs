using System;

/* 
 * 1. Validar si es usuario existente o si se debe registrar, y generar un sistema de registro o login
 * 2. El programa debe ser capaz de darle la bienvenida a un usuario existente si en efecto existe 
 * 3. El programa debe repetirse hasta que se registren las 10 personas
 */

namespace Restaurant10TablesReservationSystem
{
    class Program
    {
        static void Main(string[] args)
        {
            string[] userName = new string[10] {"","","","","","","","","",""};
            int arrayCurrentIndex = 9;
            Console.WriteLine("Bienvenidos al mejor restaurante del mundo");
            bool userType;
            while (arrayCurrentIndex<10)
            {
                /*if (arrayCurrentIndex == 10)
                {
                    Console.WriteLine("El restaurante esta lleno. Intentelo el siguiente año");
                    Environment.Exit(0);
                }*/
                Console.WriteLine("\n\nTu estas registrado?. Escribe SI o NO");
                userType = Convert.ToBoolean(Console.ReadLine());
                if (userType==true)
                {
                    Console.WriteLine("Hola, porfavor dinos cual es tu nombre");
                    string userToSearch = Console.ReadLine();
                    Console.WriteLine("Estamos buscando el usuario {0}",userToSearch);
                    int index = Array.IndexOf(userName, userToSearch);
                    if (index == -1)
                    {
                        Console.WriteLine("El usuario no se encontro. Intentelo de nuevo o registralo");
                    }
                    else
                    {
                        Console.WriteLine($"Bienvenido {userName[index]} es un placer servirte");
                    }
                }
                else if (userType==false)
                {
                    Console.WriteLine("Porvafor escribe y recuerda tu nombre de usuario");
                    userName[arrayCurrentIndex] = Console.ReadLine();
                    Console.WriteLine("Tu usuario se a registrado exitosamente\n" + 
                        $"Tu nombre de usuario es {userName[arrayCurrentIndex]}");
                    arrayCurrentIndex++;
                }
            }
            Console.WriteLine("El restaurante esta lleno. Intentelo el siguiente año\nEsta es la lista de comensales: ");
            int auxIndex = 0;
            foreach (string element in userName)
            {
                Console.WriteLine($"Número: {auxIndex} - Nombre: {element}");
                Console.WriteLine("{0}", userName[auxIndex]);
                auxIndex++;
            }
            Environment.Exit(0);
        }
    }
}
