package main

import "fmt"

func normalFunction(message string) {
	fmt.Println(message)
}

func tripleArgument(a, b int, c string) {
	var result float64
	switch {
	case c == "+":
		result = float64(a + b)
	case c == "-":
		result = float64(a - b)
	case c == "*":
		result = float64(a * b)
	case c == "/":
		result = float64(a / b)
	}
	fmt.Println("La operación de ", a, c, b, "es = ", result)
}

func returnValue(a int) int {
	return a * 2
}

func doubleReturn(a int) (b, c int) {
	return a, a * 2
}

func main() {
	normalFunction("Hola mundo!!!")
	tripleArgument(1, 4, "*")
	value := returnValue(4)
	fmt.Println(value)
	value1, value2 := doubleReturn(3)
	fmt.Println("Valor1: ", value1, " - Valor2:", value2)
	valor1, _ := doubleReturn(2)
	fmt.Println("Valor1: ",valor1)
}
