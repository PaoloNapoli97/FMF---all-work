using System;
using System.Globalization;
using System.IO;
using System.Security.Authentication;

class Test
{
    static void Main(){
        int[] array = new int[10];
        Console.WriteLine("Add some numbers to the list");
        for (int i = 0; i < array.Length; i++)
            {
                array[i] = Convert.ToInt32(Console.ReadLine());
            }
        Console.WriteLine("Choose your operation");
        int selector = Convert.ToInt32(Console.ReadLine());
        switch (selector)
        {
            case 1:
                int sum = 0;
                for (int i = 0; i < array.Length; i++)
                    {
                        sum += array[i];
                    }
                Console.WriteLine(sum);
            break;

            case 2:
                int product = 1;
                for (int i = 0; i < array.Length; i++)
                    {
                        product *= array[i];
                    }
                Console.WriteLine(product);
            break;

            case 3:
                float average = 0;
                for (int i = 0; i < array.Length; i++)
                {
                    average += array[i];
                }
                average /= array.Length;
                Console.WriteLine(average);
            break;

            default:
                Console.WriteLine("Invalid option, closing program");
            break;
        }
    }

}