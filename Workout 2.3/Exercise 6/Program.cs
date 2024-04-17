using System;
using System.Diagnostics.Contracts;
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


        int[] arrRes = array1.Union(array2).ToArray();

        int temp, smallest;
        for (int i = 0; i < arrRes.Length - 1; i++) {
            smallest = i;
            for (int j = i + 1; j < arrRes.Length; j++) {
            if (arrRes[j] < arrRes[smallest]) {
                smallest = j;
            }
            }
            temp = arrRes[smallest];
            arrRes[smallest] = arrRes[i];
            arrRes[i] = temp;
        }

        Console.WriteLine("Intersection");
        for (int z = 0; z < arrRes.Length; z++)
        {
            Console.WriteLine(arrRes[z]);
        }
    }

}