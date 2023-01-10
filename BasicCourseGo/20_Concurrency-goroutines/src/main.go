package main

import (
	"fmt"
	"sync"
	//"time"
)

func say(text string, wg *sync.WaitGroup) {
	defer wg.Done()
	fmt.Println(text)
}

func main() {
	var wg sync.WaitGroup

	fmt.Println("Hello")
	wg.Add(1)
	
	go say("word", &wg)
	wg.Wait()
	
	wg.Add(1)
	go func(text string){
		fmt.Println(text)
		defer wg.Done()
	}("Adios")
	wg.Wait()

	//time.Sleep(time.Second*1)
}
