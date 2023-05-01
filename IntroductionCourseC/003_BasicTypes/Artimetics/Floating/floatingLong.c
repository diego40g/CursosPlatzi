/*
    Basic types:
    (B) Punto flotante long double
        10 bytes 
        3.4E-4932 to 1.1E+4932 (19 decimal places)
*/

int main(){
    long double num1 = 231.13659854782365478956;
    printf("Double: %lf", num1);
    printf("Double: %e", num1);
    printf("Double: %E", num1);
    printf("Double: %.2lf", num1);
    return 0;
}