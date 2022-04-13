<?php
    require_once('account.php');
    class Car{
        public $id;
        public $license;
        public $driver;
        protected $passengers;

        public function __construct($license, $driver){
            $this->license=$license;
            $this->driver=$driver;
        }

        public function PrintDataCar(){
            echo "license: $this->license, driver-name: {$this->driver->name}, driver-document: {$this->driver->document}";
        }
    }

    public function getPassenger() {
        return $this->passenger;
    }

    public function setPassenger($passengers){
        if($passengers==4){
            $this->passenger=$passengers;
        }else{
            echo "Necesitas asignar 4 pasajeros";
        }
    }
?>