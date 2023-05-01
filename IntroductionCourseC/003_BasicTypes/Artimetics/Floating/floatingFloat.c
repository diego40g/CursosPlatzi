/*
    Basic types:
    (B) Punto flotante float
        4 bytes 
        1.2E-38 to 3.4E+38 (6 decimal places)
*/

int main(){
    float num1 = 231.161951645657454156;
    printf("Float: %f", num1);
    printf("Float: %e", num1);
    printf("Float: %E", num1);
    printf("Float: %.2f", num1);
    return 0;
}