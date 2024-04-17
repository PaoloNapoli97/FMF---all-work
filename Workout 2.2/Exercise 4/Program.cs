using System;
using System.Globalization;
using System.IO;
using System.Security.Authentication;

class Test
{
    static void Main(){
        Console.WriteLine("Write something");
        string input = Console.ReadLine();
        Console.WriteLine("Insert a word");
        string wordOne = Console.ReadLine();
        Console.WriteLine("Insert another word");
        string wordTwo = Console.ReadLine();
        int i = 0;
        int k = 0;

        string[] checkWords = input.Split(' ');
        for (int z = 0; z < checkWords.Length; z++)
        {
            if (checkWords[z].Contains(wordOne))
            {
                i++;
            }
            if (checkWords[z].Contains(wordTwo))
            {
                k++;
            }
        }

        if(i == 0){
            Console.WriteLine($"The text doesn't contain the word '{wordOne}'");
        }
        else{
            Console.WriteLine($"There are {i} '{wordOne}' in the text you inserted");
        }

        if (k == 0)
        {
            Console.WriteLine($"The text doesn't contain the word '{wordTwo}'");
        }
        else
        {
            Console.WriteLine($"There are {k} '{wordTwo}' in the text you inserted");
        }


        
        
    }

}