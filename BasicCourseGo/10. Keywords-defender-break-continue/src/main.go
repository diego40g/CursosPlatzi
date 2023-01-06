package main

import "fmt"

func main() {
	// Defer
	defer fmt.Println("Hola") //lo ejecuta la funcion como ultima linea
	fmt.Println("Mundo")

	// Continue y break
	for i:=0;i<10;i++{
		fmt.Println(i)

		//Continue
		if (i==2){
			fmt.Println("ES 2")
			continue
		}
		//Break
		if (i==7){
			fmt.Println("Break")
			break
		}
	}

}