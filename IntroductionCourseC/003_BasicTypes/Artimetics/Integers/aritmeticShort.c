/*
    Basic types:
    (A) Aritmeticos short
        2 bytes
        -32 768 a 32 767

    Los unsigned short
        0 a 65 535
*/

#include <stdio.h>

int main(){
    short num1 = 65234;
    unsigned short num2 = 65234;

    printf("Short: %hi", num1);
    printf("Short: %hu", num2);

    return 0;
}