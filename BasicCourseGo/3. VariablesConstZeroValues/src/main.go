package main

import "fmt"

func main() {
	//Declaración de constantes
	const pi float64 = 3.141516
	const euler = 2.71828

	fmt.Println("PI = ", pi)
	fmt.Println("EULER = ", euler)

	//Declaración de varaibles enteras
	base := 12 //no necesita ser daclarado antes si colocamos :
	var altura int = 14
	var area int

	fmt.Println("BASE = ", base, "ALTURA = ", altura)
	area = base * altura
	fmt.Println("AREA = ", area)

	// Zero values
	var a int
	var b float64
	var c string
	var d bool
	fmt.Println(a, b, c, d)

	// Area cuadrado
	const baseCuadrado = 10
	areaCuadrado := baseCuadrado * baseCuadrado
	fmt.Println("LADO DEL CUADRADO = ", baseCuadrado)
	fmt.Println("AREA DEL CUADRADO = ", areaCuadrado)
}
