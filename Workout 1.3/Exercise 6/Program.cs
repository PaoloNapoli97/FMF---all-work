using System;
using System.Globalization;
using System.IO;

class Test
{
    static void Main(){
        Console.WriteLine("Insert a positive number");
        int num = Convert.ToInt32(Console.ReadLine());
        num = 0;
        int i = 1;
        int sum = 0;

        while (num >= 0)
        {
            Console.WriteLine("Insert a positive number");
            num = Convert.ToInt32(Console.ReadLine());
            if (num<0)
            {
                break;
            }
            sum += num;
            i++;
        }

        int med = sum/i;
        Console.WriteLine("The arithmetic mean of the insert numbers, excluded the first of the series is: " + med);
    }

}