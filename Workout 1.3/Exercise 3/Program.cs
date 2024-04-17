using System;
using System.IO;

class Test
{
    static void Main(){
        Console.WriteLine("Insert the ho many numbers you want to insert: ");
        int seq = Convert.ToInt32(Console.ReadLine());

        int StartEqual = -1;
        int CurrentNumber = 0;
        
        for (int i = 0; i < seq; i++)
        {
            Console.WriteLine("Insert a number");
            int num = Convert.ToInt32(Console.ReadLine());

            if(i > 0 && StartEqual < 0 && CurrentNumber == num){
                StartEqual = i;
            }

            CurrentNumber = num;
        }

        if(CurrentNumber != -1){
            Console.WriteLine("The sequence of equal number start at the position: " + StartEqual);
        }
        else
        {
            Console.WriteLine("There are no equal number in the sequence inserted");
        }
    }

}