<?php
    require_once('car.php');
    class UberVan extends Car {
        public $typeCarAccepted;
        public $seatsMaterial;

        public function __construct($license,$driver,$typeCarAccepted,$seatsMaterial){
            parent::__construct($license,$driver);
            $this->typeCarAccepted=$typeCarAccepted;
            $this->seatsMaterial=$seatsMaterial;
        }

        public function setPassenger($passenger) {
            if ($passenger == 6) {
                $this->passengers = $passenger;
            }
            else {
                echo "Necesitas asignar 6 pasajeros";
            }
        }
    }
?>