using System;
using System.Globalization;
using System.IO;

class Test
{
    static void Main(){
        Console.WriteLine("Write something");
        string input = Console.ReadLine();
        Console.WriteLine(" 1- To reverse the string \n 2- To print all vocals in even position \n 3- Check if palindrom \n 4- Print last word");
        int optionCase = Convert.ToInt32(Console.ReadLine());

        switch (optionCase)
        {
            case 1:
            char[] stringToArray = input.ToCharArray();
            Array.Reverse(stringToArray);
            string ReversedString = new string(stringToArray);
            Console.WriteLine(stringToArray);
            break;

            case 2:
            stringToArray = input.ToCharArray();
            string toVocal = " ";
            for (int i = 0; i < stringToArray.Length; i++)
            {
                if (i%2==1)
                {
                    if (stringToArray[i] == 'a' || stringToArray[i] == 'e'|| stringToArray[i] == 'i'|| stringToArray[i] == 'o'|| stringToArray[i] == 'u')
                    {
                        toVocal += stringToArray[i];
                    }
                }
            }
            Console.WriteLine(toVocal);
            break;

            case 3:
            stringToArray = input.ToCharArray();
            Array.Reverse(stringToArray);
            ReversedString = new string(stringToArray);
            if (input == ReversedString)
            {
                Console.WriteLine($"The word {ReversedString} is palindrome");
            }
            else
            {
                Console.WriteLine($"The word {input} is not palindrome");
            }
            break;

            case 4:
            string LastWord = input.Split(" ", StringSplitOptions.RemoveEmptyEntries).Last();
            Console.WriteLine(LastWord);
            break;

            default:
                if (optionCase <= 0 || optionCase > 4)
                {
                    Console.WriteLine("Invalid number");
                }
            break;
        }

    }

}