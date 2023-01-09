package main

import (
	ap "19_challenge-interfaces/src/areas"
	"fmt"
)

func main(){
	mySquare := ap.Square{Base:2}
	myRectangle := ap.Rectangle{Base: 3,Height: 4}
	myTriangle := ap.Triangle{Base: 5, Height: 2}

	fmt.Println(mySquare)
	ap.Calcular(mySquare)
	fmt.Println(myRectangle)
	ap.Calcular(myRectangle)
	fmt.Println(myTriangle)
	ap.Calcular(myTriangle)
	
}