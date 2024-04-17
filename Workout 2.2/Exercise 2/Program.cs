using System;
using System.Globalization;
using System.IO;

class Test
{
    static void Main(){
        char[] LowerCaseAlphabet = {'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',' ',};
        Console.WriteLine("Insert password");
        string password = Console.ReadLine();
        Console.WriteLine("Insert a number");
        int encryptionNum = Convert.ToInt32(Console.ReadLine());
        if (encryptionNum > LowerCaseAlphabet.Length)
        {
            encryptionNum -= LowerCaseAlphabet.Length;
        }
        string test = "";
        string testReverse = "";

        char[] stringToArray = password.ToCharArray();
        for (int i = 0; i < password.Length; i++)
        {
            for (int j = 0; j < LowerCaseAlphabet.Length; j++)
            {
                if (stringToArray[i] == LowerCaseAlphabet[j])
                {
                    test += LowerCaseAlphabet[(j + encryptionNum)% LowerCaseAlphabet.Length];
                }
            }
        }

        for (int k = 0; k < password.Length; k++)
        {
            for (int z = 0; z < LowerCaseAlphabet.Length; z++)
            {
                if (test[k] == LowerCaseAlphabet[z])
                {
                    testReverse += LowerCaseAlphabet[(z - encryptionNum)%LowerCaseAlphabet.Length];
                }
            }
        }
        Console.WriteLine(test);
        Console.WriteLine(testReverse);
    }

}