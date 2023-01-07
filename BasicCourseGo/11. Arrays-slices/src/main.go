package main

import "fmt"

func printProperties(a []int) {
	fmt.Println("Lista de elementos: ", a)
	fmt.Println("Tamaño del arreglo: ", len(a))
	fmt.Println("Cantidad maxima de elementos posibles ", cap(a))
}

func main() {
	//Array
	var array [4]int
	array[0] = 1
	array[1] = 2
	printProperties(array[:])
	printProperties(array[2:3])

	//Slice
	slice := []int{0, 1, 2, 3, 4, 5, 6}
	printProperties(slice)

	//Metodos en el slice
	fmt.Println(slice[0])
	fmt.Println(slice[:3])
	fmt.Println(slice[2:4])
	fmt.Println(slice[4:])

	//Append
	slice = append(slice, 7)
	printProperties(slice)

	//Append new list
	newSlice := []int{8,9,10}
	slice = append(slice, newSlice...)
	printProperties(slice)
}
