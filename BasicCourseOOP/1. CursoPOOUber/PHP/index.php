<?php
    require_once('car.php');
    require_once('account.php');
    require_once('uberX.php');
    require_once('uberPool.php');

    // $car=new Car ("PAQ6521",new Account("Juan Perez","1717549845"));
    // $car->PrintDataCar();

    $uberX=new UberX("PFS4563", new Account("Juan Perez","1723458932"), "Ford", "Mustan");
    $uberX->PrintDataCar();

    $uberPool=new UberPool("PTY9887", new Account("Pedro Rosero","1798654521"),"Toyota","Corona");
    $uberPool->PrintDataCar();
?>