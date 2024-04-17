using System;
using System.Globalization;
using System.IO;

class Test{
    static void Main(){
        float sum = 0;
        Console.WriteLine("Insert how many numbers you want to add");
        int seq = Convert.ToInt32(Console.ReadLine());
        int m = 0;

        for (int i = 0; i < seq; i++)
        {
            Console.WriteLine("Insert a number : ");
            int num = Convert.ToInt32(Console.ReadLine());

            if(num%2 == 0) {
                sum += num;
                m++;
            }

        }

        sum = sum/(float)m;

        Console.WriteLine("The arithmetic mean of the insert number is: " + sum);
    }
}