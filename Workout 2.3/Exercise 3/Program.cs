using System;
using System.Globalization;
using System.IO;
using System.Security.Authentication;

class Test
{
    static void Main()
    {
        Console.WriteLine("Insert lenght of the array");
        int seq = Convert.ToInt32(Console.ReadLine());
        int[] array = new int[seq];
        List<int> copy = new List<int>();
        int counter = 0;
        Console.WriteLine($"Insert {seq} numbers");

        for (int i = 0; i < seq; i++)
        {
            array[i] = Convert.ToInt32(Console.ReadLine());
        }

        for (int i = 0; i < array.Length; i++)
        {
            if (array[i] == 0)
            {
                continue;
            }

            for (int j = 0; j < array.Length; j++)
            {
                if (array[i] == array[j])
                {
                    continue;
                }
                else if(!copy.Contains(array[i]))
                {
                    copy.Add(array[i]);
                }
            }
        }

        Console.WriteLine("result");
        for (int i = 0; i < copy.Count; i++)
        {
            Console.WriteLine(copy[i]);
        }
    }

}