package main

import "fmt"

func isParlindromo(text string) bool {
	var textReverse string
	for i := len(text) - 1; i >= 0; i-- {
		textReverse += string(text[i])
	}
	if text==textReverse{
		return true
	}else{
		return false
	}
}

func main() {
	slice := []string{"hola", "que", "hace"}

	for i, valor := range slice {
		fmt.Println("indice: ", i)
		fmt.Println("Valor: ", valor)
	}

	fmt.Println("Es palindromo: ",isParlindromo("ama"))
	fmt.Println("Es palindromo: ",isParlindromo("amor a roma"))
	fmt.Println("Es palindromo: ",isParlindromo("casas"))
}
