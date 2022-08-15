using System;

namespace StringMethod
{
    public class Program
    {
        public static void Main(string[] args)
        {
            string classTopic = "Métodos de strings";
            string school = "Platzi";
            Console.WriteLine("Estoy aprendiendo de " + classTopic + " en " + school + ".");

            //Clone
            string schoolClone = school.Clone().ToString();
            Console.WriteLine("Copia de escuela: " + schoolClone);

            //CompareTo
            Console.WriteLine(classTopic.CompareTo("Métodos"));
            Console.WriteLine(school.CompareTo(schoolClone));

            //Contains
            Console.WriteLine(school.Contains("Pla"));
            Console.WriteLine(school.Contains("la"));
            Console.WriteLine(school.Contains("pla"));

            //EndsWith
            Console.WriteLine(school.EndsWith("tzi"));
            Console.WriteLine(school.EndsWith("tz"));

            //StartsWith
            Console.WriteLine(school.StartsWith("Pl"));
            Console.WriteLine(school.StartsWith("la"));

            //Equals
            Console.WriteLine(school.Equals(schoolClone));

            //IndexOf
            Console.WriteLine(school.IndexOf("l"));

            //ToLower y ToUpper
            Console.WriteLine(school.ToLower());
            Console.WriteLine(school.ToUpper());

            //Insert
            Console.WriteLine(school.Insert(6, " es educación online efectiva"));
            Console.WriteLine(school.Insert(0, "Hola "));
            Console.WriteLine(school.Insert(2, "123"));

            //LastIndexOf
            Console.WriteLine(classTopic.LastIndexOf("s"));

            //Remove
            Console.WriteLine(classTopic.Remove(6));

            //Replace
            Console.WriteLine(classTopic.Replace("s", "z"));

            //Split
            string[] splitTopic = classTopic.Split(new char[] { 's' });
            for(int i=0;i< splitTopic.Length; i++)
            {
                Console.WriteLine(splitTopic[i]);
            }

            //Substring
            Console.WriteLine(classTopic.Substring(2, 10));

            //ToCharArray
            Console.WriteLine(school.ToCharArray()[0]);

            //Trim
            string TextWithSpaces = "  hola, había espacios al principio y al final ";
            Console.WriteLine(TextWithSpaces.Trim());
        }
    }
}