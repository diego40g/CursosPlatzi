class Main {
    public static void main(String[] args) {
        Car car = new Car("PQE4651",new Account("Juan Perez", "1754658987"));
        car.passengers=4;
        car.printDataCar();

        Car car2 = new Car("PMA3644",new Account("Pedro Rosero", "1728935463"));
        car2.passengers=3;
        car2.printDataCar();
    }
}