class UberX extends Car {
    String brand;
    String model;

    public UberX(String license, Account driver, String brand, String model){
        super(license, driver);
        this.brand=brand;
        this.model=model;
    }

    public UberX(String license, Driver driver, String brand, String model){
        super(license, driver);
        this.brand=brand;
        this.model=model;
    }

    public UberX(String license, User driver, String brand, String model){
        super(license, driver);
        this.brand=brand;
        this.model=model;
    }
}
