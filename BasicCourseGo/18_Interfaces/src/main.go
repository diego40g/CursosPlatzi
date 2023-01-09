package main

import "fmt"

type figure2D interface {
	area() float64
}

func calcular(f figure2D) {
	fmt.Println("Area: ", f.area())
}

type cuadrado struct {
	base float64
}

func (c cuadrado) area() float64 {
	return c.base * c.base
}

type rectangle struct {
	base   float64
	height float64
}

func (r rectangle) area() float64 {
	return r.base * r.height
}
func main() {
	mySquare := cuadrado{base: 4}
	myRectangle := rectangle{base: 5, height: 3}
	calcular(mySquare)
	calcular(myRectangle)

	//interfaces list
	myInterface := []interface{}{"hola",12,3.41}
	fmt.Println(myInterface...)
}