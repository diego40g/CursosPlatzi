#include <stdio.h>

enum deck{
    club=0,
    diamonds = 5,
    hearts = 10,
    spades = 15,
} card;

int main(){
    card = spades;
    printf("Card power %d",card);
    printf("Size of var %d", sizeof(card));
    return 0;
}