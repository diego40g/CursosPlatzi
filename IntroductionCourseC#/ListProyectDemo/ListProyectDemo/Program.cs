// See https://aka.ms/new-console-template for more information
Console.WriteLine("Menu de TacoShopping");

List<string> tacoShoppingList = new List<string>();

tacoShoppingList.Add("Cinco tacos de suadero");
tacoShoppingList.Add("Cautro tacos de tripa");
tacoShoppingList.Add("Cinco tacos de pastor");
tacoShoppingList.Add("Cuatro Coca Colas");
tacoShoppingList.Add("Cinco tacos de suadero");

for (int i = 0; i < tacoShoppingList.Count; i++)
{
    Console.WriteLine(tacoShoppingList[i]);
}

tacoShoppingList.Remove("Cinco tacos de suadero");
tacoShoppingList.RemoveAt(0);

Console.WriteLine("----------------");

for (int i = 0; i < tacoShoppingList.Count; i++)
{
    Console.WriteLine(tacoShoppingList[i]);
}