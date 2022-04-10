<?php
    require_once('Car.php');
    require_once('Account.php');

    $car=new Car ("PAQ6521",new Account("Juan Perez","1717549845"));
    $car->PrintDataCar();
?>