// Create function to return if number is pair or odd
package main

func pairOddNumber(num int) string {
	if num%2 == 0 {
		return "Pair"
	} else {
		return "Odd"
	}
}

func main() {
	number := 10
	result := pairOddNumber(number)
	println(result)
}
