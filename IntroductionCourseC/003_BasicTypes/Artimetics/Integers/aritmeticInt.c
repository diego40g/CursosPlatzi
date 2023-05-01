/*
    Basic types:
    (A) Aritmeticos int
        2 o 4 bytes (actualmente son solo 4 bytes)
        -32 768 a 32 767
        -2 147 483 648 a 2 147 483 647

    Los unsigned int
        0 a 65 535
        0 a 4 294 967 295
*/

#include <stdio.h>

int main() {
    int num1 = 4294967123;
    unsigned int num2 = 4294967123;

    printf("Integer 1: %d", num1); //using in base decimal
    printf("Integer 1: %o", num1); //using in base octal
    printf("Integer 1: %x", num1); //using in base hexadecimal
    printf("Integer 1: %i", num1); 
    printf("Integer 1: %u", num2);

    return 0;
}