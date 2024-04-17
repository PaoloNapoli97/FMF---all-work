using System;
using System.Globalization;
using System.IO;
using System.Security.Authentication;

class Test
{
    static void Main(){

        Console.WriteLine("Insert a number");
        int seq = Convert.ToInt32(Console.ReadLine());
        int [] array = new int [seq];
        int [] copy = new int [seq];
        int [] copy2 = new int [seq];

        Console.WriteLine($"Insert {seq} numbers");

        for (int i = 0; i < seq; i++)
        {
            array[i] = Convert.ToInt32(Console.ReadLine());
        }
        Console.WriteLine("numbet inserted");
        for (int k = 0; k < seq; k++)
        {
            Console.WriteLine($"{k}- {array[k]} ");
        }

        for (int i = 1; i < seq; i++)
        {
            copy[i-1] = array[i];
        }

        for (int i = 1; i < seq; i++)
        {
            copy2[i] = array[i-1];
        }



        Console.WriteLine("Shift list of number on the left");
        for (int i = 0; i < seq; i++)
        {
            Console.WriteLine($"{i}-{copy[i]} ");    
        }

        Console.WriteLine("Shift List on the right");
        for (int i = 0; i < seq; i++)
        {
            Console.WriteLine($"{i}-{copy2[i]} ");    
        }
    }

}