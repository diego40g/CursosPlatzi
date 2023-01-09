package pc

import "fmt"

type Pc struct {
	Ram   int
	Brand string
	Disk  int
}

func (myPc Pc) String() string {
	return fmt.Sprintf("Tengo %d GB RAM, %d GB Disco y es una %s", myPc.Ram, myPc.Disk, myPc.Brand)
}
