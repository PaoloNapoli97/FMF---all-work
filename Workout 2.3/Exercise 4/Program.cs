using System;
using System.Globalization;
using System.IO;
using System.Security.Authentication;

class Test
{
    static void Main()
    {
        Console.WriteLine("Insert the lenght of the first array");
        int a1 = Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Insert the lenght of the second array");
        int a2 = Convert.ToInt32(Console.ReadLine());
        int[] array1 = new int[a1];
        int[] array2 = new int[a2];
        List<int> result = new List<int>();

        Console.WriteLine("Fill the first array");
        for (int i = 0; i < a1; i++)
        {
            array1[i] = Convert.ToInt32(Console.ReadLine());
        }
        Console.WriteLine("Fill the second array");
        for (int k = 0; k < a2; k++)
        {
            array2[k] = Convert.ToInt32(Console.ReadLine());
        }

        for (int i = 0; i < array1.Length; i++)
        {
            for (int j = 0; j < array2.Length; j++)
            {
                if (array1[i] == array2[j])
                {
                    result.Add(array1[i]);
                }
            }
        }

        Console.WriteLine("Intersection");
        for (int z = 0; z < result.Count; z++)
        {
            Console.WriteLine(result[z]);
        }
    }

}