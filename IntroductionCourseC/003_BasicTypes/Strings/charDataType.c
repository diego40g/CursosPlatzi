/*
    Basic types:
    (C) String char
        1 byte
        -128 to 127

    Unsigned chard
        0 a 255
*/
#include <stdio.h>

int main(){
    char letter1 = 65; //A
    unsigned char letter2 = 65; //A

    printf("Val1: %c",letter1);
    printf("Val1: %u",letter2);
}