class Car{
    private Integer id;
    private String license;
    private Account account;
    private Driver driver;
    private User user;
    protected Integer passengers;

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
        if(passengers!=null){
            System.out.println("License: "+license+" Driver: "+account.name+" Passengers: "+passengers);
        }
    }

    void printDataCarDriver(){
        System.out.println("License: "+license+" "+driver.printDataDriver());
    }

    void printDataUser(){
        System.out.println("License: "+license+" "+user.printDataUser());
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Driver getDriver() {
        return driver;
    }

    public void setDriver(Driver driver) {
        this.driver = driver;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

        public Integer getPassenger(){
        return passengers;
    }

    public void setPassenger(Integer passenger){
        if(passenger==4){
            this.passengers=passenger;
        }else{
            System.out.println("Necesitas asignar 4 pasajeros");
        }
    }

}