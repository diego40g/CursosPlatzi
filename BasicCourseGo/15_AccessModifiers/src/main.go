package main

import (
	pk "15_AccessModifiers/src/mypackage"
	"fmt"
)

func main() {
	var myCar pk.CarPublic
	myCar.Brand = "Ferrari"
	myCar.Year = 2023 
	fmt.Println(myCar)
	
	//variable con acceso privado
	//var myOtherCar pk.carPrivate
	//fmt.Println(myOtherCar)

	pk.PrintPublicMessage("Hola Diego")
	
	//funcion de acceso privado
	//pk.printPrivateMessage("Hola")
}
