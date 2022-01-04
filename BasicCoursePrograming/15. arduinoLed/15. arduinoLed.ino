int bombillo=13;
int espera=500;//equivalente a 1 segundo
void setup() {
  // put your setup code here, to run once:
  pinMode(bombillo, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(bombillo,HIGH);
  delay(espera*2);
  digitalWrite(bombillo,LOW);
  delay(espera);
}
