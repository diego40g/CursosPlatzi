package main

import "fmt"

type car struct {
	brand string
	year  int
}

func main() {
	myCar := car{brand: "Ford", year: 1970}
	fmt.Println(myCar)

	var otherCar car
	otherCar.brand="Toyota"
	fmt.Println(otherCar)
}