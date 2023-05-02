/*enum designElements {
    ITALICS = 1,
    BOLD = 2,
    STRICK = 3
};
*/
#include <stdio.h>

enum weekDays {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday};

int main(){
    enum weekDays today;
    today = Wednesday;
    printf("Day %d", today+1);
    return 0;
}