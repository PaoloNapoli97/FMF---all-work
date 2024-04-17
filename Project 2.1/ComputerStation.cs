public class ComputerStation
{
    public Labs Lab { get; set; }
    public User User { get; set; }
    private int ComputerId { get; set; }
    private string ComputerPrograms { get; set; }
    public List<ComputerStation> Reservation = new List<ComputerStation>();
    public ComputerStation(Labs lab, User user, int computId, string computeprogram)
    {
        ComputerId = computId;
        Lab = lab;
        User = user;
        ComputerPrograms = computeprogram;
    }
    public ComputerStation() { }
    public int[] Hours = new int[10];
    public void AddPrenotation(Labs lab, User user)
    {
        Console.WriteLine("Choose a workday: \n1 - Monday\n2 - Tuesday\n3 - Wednesday\n4 - Thursday\n5 - Friday");
        int indexDay = Convert.ToInt32(Console.ReadLine());
        while (indexDay < 0 || indexDay > lab.Days.Length)
        {
            Console.WriteLine("Invalid workday, try again");
            indexDay = Convert.ToInt32(Console.ReadLine());
        }
        Console.WriteLine("Choose a work hour: ");
        int SelectedHour;
        SelectedHour = Convert.ToInt32(Console.ReadLine());
        while (SelectedHour < 9 || SelectedHour > 18)
        {
            Console.WriteLine("Choose a valid work hour, try again: ");
            SelectedHour = Convert.ToInt32(Console.ReadLine());
        }


        for (int i = 0; i < Reservation.Count; i++)
        {
            for (int j = 0; j < lab.Days.Length; j++)
            {

            }
        }

        Console.WriteLine($"{user.FirstName} {user.LastName} {lab.Id} {lab.Days[indexDay]} {SelectedHour}");
    }
}
