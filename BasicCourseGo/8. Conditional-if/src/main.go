package main

import (
	"fmt"
	"log"
	"strconv"
)

func main() {
	value1 := 1
	value2 := 2

	if value1 == 1 {
		fmt.Println("Es 1")
	} else {
		fmt.Println("No es 1")
	}

	// AND
	if value1 == 1 && value2 != 1 {
		fmt.Println("Valor AND verdadero")
	}

	// OR
	if value1 == 1 || value2 <= 1 {
		fmt.Println("Valor OR verdadero")
	}

	// NOT
	if !(value1 == 2) {
		fmt.Println("Valor NOT verdadero")
	}

	//Convertir texto a numero
	value, err := strconv.Atoi("asd")
	if err != nil { //para saber si una funcion tiene error
		log.Fatal(err)
	}
	fmt.Println("El valor es ", value)

}
