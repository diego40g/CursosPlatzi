/*
    Basic types:
    (B) Punto flotante double
        8 bytes 
        2.3E-308 to 1.7E+308 (15 decimal places)
*/

int main(){
    double num1 = 231.13659854782365478956;
    printf("Double: %lf", num1);
    printf("Double: %e", num1);
    printf("Double: %E", num1);
    printf("Double: %.2lf", num1);
    return 0;
}