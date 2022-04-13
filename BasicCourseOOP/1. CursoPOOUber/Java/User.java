public class User extends Account{
    public User(String name, String document, String email, String password){
        super(name,document,email,password);
    }

    String printDataUser(){
        return("Document user: "+document+" Name user: "+name+" E-mail: "+email+" Password: "+password);
    }
}
