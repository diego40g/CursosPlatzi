// hacer palindromo sin distinguir mayusculas y minusculas
package main

import (
	"fmt"
	"strings"
)

func isParlindromo(text string) {
	var textReverse string
	for i := len(text)-1; i >= 0; i-- {
		textReverse += strings.ToLower(string(text[i]))
	}
	if textReverse == strings.ToLower(text) {
		fmt.Println("Es palindroma")
	} else {
		fmt.Println("No es palindroma")
	}
}

func main() {
	isParlindromo("Amar")
}
