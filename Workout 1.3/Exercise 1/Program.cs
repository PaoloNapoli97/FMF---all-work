using System;
using System.IO;


Console.WriteLine("Insert a number:");
int num = Convert.ToInt32(Console.ReadLine());
int sum = 0;

while (num!=0)
{
    sum += num;
    Console.WriteLine("Insert another number: ");
    num = Convert.ToInt32(Console.ReadLine());
}

Console.WriteLine("The sum of the insert numbers is: " + sum);
