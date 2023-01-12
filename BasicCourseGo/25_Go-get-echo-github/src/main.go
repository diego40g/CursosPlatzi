package main

import (
	"net/http"
	"github.com/labstack/echo"
)

func main() {
	// instancia echo
	e := echo.New()

	//ruta
	e.GET("/", func (c echo.Context) error {
		return c.String(http.StatusOK, "Hello Word!!!")
	})
	e.Logger.Fatal(e.Start(":1323"))
}