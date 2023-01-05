package main

import "fmt"

func main() {
	conditional := 10
	counter := 0
	for {
		if counter == conditional {
			fmt.Println("Successful exit")
			break
		}
		counter++
	}
}