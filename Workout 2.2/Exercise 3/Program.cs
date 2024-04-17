using System;
using System.Globalization;
using System.IO;

class Test
{
    static void Main(){
        Console.WriteLine("Write something");
        string phrase = Console.ReadLine();
        string[] words = phrase.Split(' ', ',' , ':', '.', '"', '?', '-', '_', '.', ';', '!');
        int i = 0;

        foreach (var word in words)
        {
            i++;
            Console.WriteLine($"<{word}>");
        }
        Console.WriteLine($"The phrase contains {i} words");
    }

}