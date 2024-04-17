using System;
using System.Dynamic;
using System.Globalization;
using System.IO;
using System.Reflection.Metadata;


// Prima classe che vado a pensare è la scuola (in questo caso 1). La seconda laboratorio.


class Program{

    static void Main(){
        Labs labs = new Labs();
        User user = new User();
        ComputerStation station = new ComputerStation();
        
        Labs[] Lab = {new Labs(1,10), new Labs(2, 5), new Labs(3, 10)};
        // User[] users = {new Students("Francesco", "Ringingulla", false, "FR1732S"), new Students("Marco", "Minchiatari", false, "MM4202S"), new Students("Andrea", "Giugno", false, "AG7432S"), new Students("Giovanni", "Giorgio", false, "GG2231S"), new Students("Lorenzo", "Abacchio", false, "LR2143S"), new Teachers("Giovanna", "Portavino", true, "GP7531T"), new Teachers("Astolio", "Portafoglio", true, "AP9312T")};
        // Reservations[] Reservation = {new Reservations(users[0], Lab[2], 1, 12), new Reservations(users[3], Lab[0], 1, 14), new Reservations (users[2], Lab[2], 1, 13), new Reservations(users[5], Lab[1], 1, 9), new Reservations(users[6], Lab[0], 1, 9), new Reservations(users[4], Lab[2], 1, 12)};

        bool quitLoop = false;

        while (!quitLoop)
        {        
            Console.WriteLine("Select the operation you want to do: \n1 - Make a reservation \n2 - View the status of the lab \n3 - View the usage from the teachers\n4 - View the usage from the students\n5 - Usage of all computers\n0 - Quit");
            int switchOption = Convert.ToInt32(Console.ReadLine());
            switch (switchOption)
            {
                case 1:
                    Console.WriteLine("Insert Name");
                    user.FirstName = Console.ReadLine();
                    Console.WriteLine("Insert Last Name");
                    user.LastName = Console.ReadLine();
                    Console.WriteLine("Are you a teacher ? Y/N");
                    char ch;
                    char.TryParse(Console.ReadLine(), out ch);
                    ch = char.ToLower(ch);
                    if (ch == 'y' || ch == 's' ){
                        user.IsTeacher = true;
                    }
                    else if (ch == 'n')
                    {
                        user.IsTeacher = false;
                    }
                    Console.WriteLine("Choose the Lab");
                    labs.Id = Convert.ToInt32(Console.ReadLine());

                    station.AddPrenotation(labs, user);
                break;

                case 2:
                break;

                case 0:
                    quitLoop = true;
                break;

                default:
                    quitLoop = true;
                break;
            }
        }
    }
}