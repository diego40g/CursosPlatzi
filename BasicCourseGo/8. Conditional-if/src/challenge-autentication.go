// Recibe user and password return true or false
package main

import (
	"fmt"
)

func autenticationUser(nameUser string, passwordUser string) bool {
	const name = "diego40g"
	const password = "123abc!"
	if name == nameUser && password == passwordUser {
		return true
	} else {
		return false
	}
}

func main() {
	user := "diego40g"
	pass := "123abc!"
	var result bool = autenticationUser(user, pass)
	fmt.Printf("La autenticacion de %s es %b\n", user, result)
}
