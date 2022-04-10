class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.license="PQE4651";
        car.driver="Juan Perez";
        car.passengers=4;
        car.printDataCar();

        Car car2 = new Car();
        car2.license="PMA3644";
        car2.driver="Pedro Rosero";
        car2.passengers=3;
        car2.printDataCar();
    }
}