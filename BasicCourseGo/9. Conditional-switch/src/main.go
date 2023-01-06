package main

import "fmt"

func main() {
	modulo := 5 % 2
	switch modulo {
		case 0:
			fmt.Println("Es par")
		default:
			fmt.Println("Es impar")
	}
	
	switch module := 5 % 2; module {
		case 0:
			fmt.Println("Es par")
		default:
			fmt.Println("Es impar")
	}

	// sin condicion es para multiples condiciones
	value:= 200
	switch {
		case value > 100:
			fmt.Println("Es mayor a 100")
		case value < 0:
			fmt.Println("Es mayor a 0")
		case modulo == 0:
			fmt.Println("Es par el modulor")
		case modulo == 1:
			fmt.Println("Es impar el modulor")
		default:
			fmt.Println("No condicion")
	}
}