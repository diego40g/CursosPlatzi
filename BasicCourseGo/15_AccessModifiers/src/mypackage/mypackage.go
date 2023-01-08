package mypackage

import "fmt"

// CarPublic car with public access
type CarPublic struct {
	Brand string
	Year  int
}

// carPrivate car with private access
type carPrivate struct {
	brand string
	year  int
}

//Print a public function message
func PrintPublicMessage(text string) {
	fmt.Println("Mensaje publico")
	fmt.Println(text)
}

//Print a private function message
func printPrivateessage(text string) {
	fmt.Println("Mensaje privado")
	fmt.Println(text)
}
