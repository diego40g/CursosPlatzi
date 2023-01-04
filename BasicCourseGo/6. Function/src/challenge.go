// Pasar el calculo de areas a funciones

package main

import (
	"fmt"
	"math"
)

func rectangleArea(base, height float64) float64 {
	return base * height
}
func trapezoidArea(largeSide, smallSide, height float64) float64 {
	return (largeSide - smallSide) * height / 2
}
func circleArea(radius float64) float64 {
	const PI float64 = 3.141516
	return PI * math.Pow(radius, 2)
}

func main() {
	a := 3.0
	b := 5.0
	c := 2.0
	result := rectangleArea(a, b)
	fmt.Println("Rectangle area")
	fmt.Printf("Base: %.0f Height: %.0f Result: %.2f\n", a, b, result)

	result = trapezoidArea(b, a, c)
	fmt.Println("Trapezoid area")
	fmt.Printf("Large: %.0f Small: %.0f Height %.0f Result: %.2f\n", b, a, c, result)

	result = circleArea(a)
	fmt.Println("Circle area")
	fmt.Printf("Radius: %.0f Result: %.2f\n", a, result)
}
