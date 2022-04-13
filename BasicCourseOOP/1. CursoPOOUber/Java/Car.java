class Car{
    Integer id;
    String license;
    Account account;
    Driver driver;
    User user;
    Integer passengers;

    public Car(String license, Account account){
        this.license=license;
        this.account=account;
    }

    public Car(String license, Driver driver){
        this.license=license;
        this.driver=driver;
    }

    public Car(String license, User user){
        this.license=license;
        this.user=user;
    }

    void printDataCar(){
        System.out.println("License: "+license+" Driver: "+account.name);
    }

    void printDataCarDriver(){
        System.out.println("License: "+license+" "+driver.printDataDriver());
    }

    void printDataUser(){
        System.out.println("License: "+license+" "+user.printDataUser());
    }
}