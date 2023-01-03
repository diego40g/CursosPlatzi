package main

import (
	"fmt"
	"math"
)

func main() {
	x := 10
	y := 50

	//Suma
	result := x + y
	println("Suma: ", result)

	//Resta
	result = y - x
	println("Resta: ", result)

	//Multiplicación
	result = x * y
	println("Multiplicación: ", result)

	//División
	result = y / x
	println("División: ", result)
	result = y % x
	println("Modulo o residuo: ", result)

	//Incrementar
	println("X: ", x, "Y: ", y)
	x++
	println("Incremento: ", x)
	y--
	println("Decremento: ", y)

	//CALCULO AREA
	const pi = 3.141516
	base := 4
	baseMayor := 6
	baseMenor := 5
	altura := 7
	radio := 3
	//RECTANGULO
	result = base * altura
	fmt.Println(result)
	//TRAPECIO
	var resultado float64 = float64((baseMayor - baseMenor) * altura / 2)
	fmt.Println(resultado)
	//CIRCULO
	resultado = pi * math.Pow(float64(radio), 2)
	fmt.Println(resultado)
}
