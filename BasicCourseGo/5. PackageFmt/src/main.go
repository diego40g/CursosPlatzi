package main

import "fmt"

func main() {
	//Declaración de varaibles
	helloMessage := "Hello"
	worldMessage := "world"

	//Println
	fmt.Println(helloMessage, worldMessage)

	//Printf
	nombre := "platzi"
	curso := 500
	fmt.Printf("%s tiene más de %d cursos\n", nombre, curso)
	fmt.Printf("%v tiene más de %v cursos\n", nombre, curso)

	//Sprintf
	message := fmt.Sprintf("%s tiene más de %d cursos\n", nombre, curso)
	fmt.Println(message)

	//Tipo datos
	fmt.Printf("nombre: %T\n",nombre)
	fmt.Printf("curso: %T",curso)
}
