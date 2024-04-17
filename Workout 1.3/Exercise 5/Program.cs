using System;
using System.IO;

class Test
{
    static void Main(){
        Console.WriteLine("Insert a number");
        int num = Convert.ToInt32(Console.ReadLine());
        int res = 0;
        
        for (int i = 1; i < num; i++)
        {
            if(num%i == 0){
                res += i;
            }
        }

        if (num > res)
        {
            Console.WriteLine("The number is Defective");
        }
        else if (num < res)
        {
            Console.WriteLine("The number is Abundant");
        }
        else if (num == res)
        {
            Console.WriteLine("The number is Perfect");
        }
    }

}