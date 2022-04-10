<?php
    require_once('account.php');
    class Car{
        public $id=integer;
        public $license=string;
        public $driver=Account;
        public $passengers=integer;

        public function __construct($license, $driver){
            $this->license=$license;
            $this->driver=$driver;
        }

        public function PrintDataCar(){
            echo "license: $this->license, driver-name: {$this->driver->name}, driver-document: {$this->driver->document}";
        }
    }
?>