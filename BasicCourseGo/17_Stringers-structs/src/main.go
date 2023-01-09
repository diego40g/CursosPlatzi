package main

import (
	pc "17_Stringers-structs/src/pc"
	"fmt"
)

func main() {
	myPc := pc.Pc{Ram: 16, Brand: "MSI", Disk: 100}
	fmt.Println(myPc)
}
