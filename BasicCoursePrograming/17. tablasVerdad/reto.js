/*
Condiciones obligatorias de transferencia:
Cliente verificado (verdadero o falso)
Destino verificado (verdadero o falso)
Saldo mayor al monto a transferir más costo de transacción

Parametros del costo de transacción:
Si el banco destino es el mismo al banco del cliente el costo de transacción es 0USD
Si el banco destino es diferente al banco del ciente el costo de transacción es de 100USD

Solo se puede hacer transferenciuas en hora de 9 a 12 o de 15 a 20
Intenta hacer todo organizado por múltiples lineas de código y Tambien en un solo If
*/
Banco_cliente="Banco el banco";
Cuenta_cliente=true;//cliente verificado
Saldo_cliente=1000000;
Banco_destino="Banco el banco";
Cuenta_destino=true;//destino verificado
Hora_transferencia=20;
Monto_transferencia=1000000;
TransaccionOtroBanco=100;

if((Hora_transferencia>=9&&Hora_transferencia<=12)||(Hora_transferencia>=15&&Hora_transferencia<=20))
{
    if(Cuenta_cliente&&Cuenta_destino){
        if(Banco_cliente!=Banco_destino){
            total+=Monto_transferencia+TransaccionOtroBanco;
        }
        if(Saldo_cliente>=total){
            console.log("Transacción efectuada!!!");
            console.log("Se transfirio $"+Monto_transferencia);
        }else{
            console.log("No tienes la cantidad necesaria");
            console.log("#Eres_pobre :'(");
        }
    }else{
        console.log("La cuenta cliente o destino no se encuentra disponible");
        console.log("Verifique la información proporcionada");
    }
}else{
    console.log("Los horarios para realizar transferencias de de 9 a 12 y 15 a 20");
    console.log("Intentalo en esos horarios gracias por su compresión no me golpe no es mi culpa :'c");
}
