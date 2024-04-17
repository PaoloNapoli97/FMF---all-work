using System;
using System.IO;

class Test
{  
    static void Main(){
        Console.WriteLine("How many bit do you want to insert? :");
        int seq = Convert.ToInt32(Console.ReadLine());
        int sum = 0;
        int p = 0;

        for (int i = 0; i < seq; i++)
        {
            Console.WriteLine("Insert a bit");
            int bit = Convert.ToInt32(Console.ReadLine());


            if(bit > 1){
                while (bit > 1)
                {
                    Console.WriteLine("Insert a number between 0 and 1");
                    bit = Convert.ToInt32(Console.ReadLine());
                }
            }

            double pow = Math.Pow(2, p);
            int pow2 = (int)pow;
            sum += (pow2*bit);
            p++;
        }

        Console.WriteLine("The binary number you inserted is: " + sum);
    }

}
