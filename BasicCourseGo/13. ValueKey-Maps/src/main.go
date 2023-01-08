package main

import "fmt"

func main() {
	m := make(map[string]int)

	m["Jose"] = 14
	m["Diego"] = 25

	fmt.Println(m)

	//Recorrer map
	for i, v := range m {
		fmt.Println(i, v)
	}

	//Encontrar un valor
	value := m["Jose"]
	fmt.Println(value)
	value = m["Ignacio"]
	fmt.Println(value)

	//Valida existencia de la llave
	valor, ok := m["Diego"]
	fmt.Println(valor, ok)
	valor, ok = m["Juan"]
	fmt.Println(valor, ok)

}