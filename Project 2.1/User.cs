public class User{
    public string? FirstName {get; set;}
    public string? LastName {get; set;}
    public bool IsTeacher {get; set;}
    public User(string name, string lastname, bool isteacher){
        FirstName = name;
        LastName = lastname;
        IsTeacher = isteacher;
    }

    public User(){}
}
public class Teachers : User{
    public string? TeacherId {get; set;}
    public Teachers(string name, string lastname, bool isteacher, string teacherid) :base(name, lastname, isteacher) {
        TeacherId = teacherid;
    }
}
public class Students : User{
    public string? StudentId {get; set;}
    public Students(string name, string lastname, bool isteacher, string studenid) :base(name, lastname, isteacher) {
        StudentId = studenid;
    }
}