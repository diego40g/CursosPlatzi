package areas

import (
	"fmt"
	"math"
)

type figure2D interface {
	Area() float64
}

type Square struct {
	Base float64
}

type Rectangle struct {
	Base   float64
	Height float64
}

type Triangle struct {
	Base   float64
	Height float64
}

func (s Square) Area() float64 {
	return math.Pow(s.Base, 2)
}

func (r Rectangle) Area() float64 {
	return r.Base * r.Height
}

func (t Triangle) Area() float64 {
	return t.Base * t.Height / 2
}

func Calcular(f figure2D) {
	fmt.Println("Area: ", f.Area())
}

func (s Square) String() string {
	return fmt.Sprintf("Un lado del cuadrado mide %v cm", s.Base)
}

func (r Rectangle) String() string {
	return fmt.Sprintf("La base del rectangulo mide %v cm, con una altura de %v cm", r.Base, r.Height)
}

func (t Triangle) String() string {
	return fmt.Sprintf("El tirangulo tien una base de %v cm y altura de %v cm", t.Base, t.Height)
}
