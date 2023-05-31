#include <stdio.h>

#define ONEPIZZA 1.5 
const float IVA = 0.12;

int main(){
    float pizzaCost, numberOfSlices=9;

    pizzaCost = ONEPIZZA*numberOfSlices;
    printf("El valor total es: $%f\n",((pizzaCost*IVA)+pizzaCost));
}