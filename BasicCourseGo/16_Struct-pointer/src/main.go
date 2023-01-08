package main

import (
	"fmt"
	pc "16_Struct-pointer/src/pc"
)

func main() {
	a := 50
	b := &a
	fmt.Printf("A: value = %d direction = %v\n", a, &a)
	fmt.Printf("B: value = %v direction = %v pointer = %v\n", b, &b, *b)
	*b=100
	fmt.Printf("A: value = %d direction = %v\n", a, &a)

	myPc := pc.Pc{Ram:16, Disk:200, Brand: "MSI"}
	fmt.Println(myPc)
	
	myPc.Ping()
	//myPc.Ram = 20 Redundante
	fmt.Println(myPc)
	myPc.DuplicateRAM()
	fmt.Println(myPc)
}
 