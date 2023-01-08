package pc

import "fmt"

type Pc struct {
	Ram   int
	Disk  int
	Brand string
}

func (myPc Pc) Ping() {
	fmt.Println(myPc.Brand, "Pong")
}

func (myPc *Pc) DuplicateRAM() {
	myPc.Ram *= 2
}
