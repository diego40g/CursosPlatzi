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
            echo "
                License: $this->license, 
                Driver-name: {$this->driver->name},
                Driver-document: {$this->driver->document},
                # de pasajeros: $this->passengers
                <p></p>
            ";
        }
        
        public function getPassenger() {
            return $this->passengers;
        }
    
        public function setPassenger($passengers){
            if($passengers==4){
                $this->passengers=$passengers;
            }else{
                echo "Necesitas asignar 4 pasajeros";
            }
        }
    }
?>