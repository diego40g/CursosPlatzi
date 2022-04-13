public class Driver extends Account{
    public Driver(String name, String document, String email, String password){
        super(name,document,email,password);
    }

    String printDataDriver(){
        return ("Document driver: "+document+" Name drive: "+name+" E-mail: "+email+" Password: "+password);
    }
}
