<?php
    require_once('car.php');
    require_once('account.php');
    require_once('uberX.php');
    require_once('uberPool.php');
    require_once('uberVan.php');
    // require_once('user.php');

    // $car=new Car ("PAQ6521",new Account("Juan Perez","1717549845"));
    // $car->PrintDataCar();

    $uberX=new UberX("PFS4563", new Account("Juan Perez","1723458932"), "Ford", "Mustan");
    $uberX->setPassenger(4);
    $uberX->PrintDataCar();

    $uberPool=new UberPool("PTY9887", new Account("Pedro Rosero","1798654521"),"Toyota","Corona");
    $uberPool->setPassenger(2);
    $uberPool->PrintDataCar();
    
    $uberVan = new UberVan("OJL395", new Account("Raúl Ramírez", "AND456"), "Nissan", "Versa");
    $uberVan->setPassenger(6);
    $uberVan->printDataCar();

    // $user=new User("Diego Paz","1723459878","diegopaznaula@gmail.com","password");
    // $user->printDataUser();
?>