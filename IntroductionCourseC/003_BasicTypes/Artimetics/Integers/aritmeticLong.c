/*
    Basic types:
    (A) Aritmeticos long
        8 bytes
        -9 223 372 036 854 775 808 a 9 223 372 036 854 775 807

    Los unsigned long
        0 a 18 446 744 073 709 551 615
*/

#include <stdio.h>

int main(){
    long num1 = 18446744073709551253;
    unsigned long num2 = 18446744073709551253;

    printf("Long: %Li", num1);
    printf("Long: %Lu", num2);

    return 0;
}