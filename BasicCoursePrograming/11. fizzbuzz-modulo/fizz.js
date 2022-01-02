/*numeros divisibles para 3 FIZZ
numero divisibles para 5 Buzz
para los dos numero FIZZBUZZ*/
var numeros = 100;
var divisible;
for(var i=1;i<=numeros;i++){
    divisible=false;
    if(esDivisible(i,3)){
        document.write('FIZZ');
        divisible=true;
    }
    if(esDivisible(i,5)){
        document.write('BUZZ');
        divisible=true;
    }
    /*if(!divisible){
        document.write(i);
    }*/
    /*if(i%3!=0&&i%5!=0){
        document.write(i);
    }*/
    if(!esDivisible(i,3)&&!esDivisible(i,5)){
        document.write(i);
    }
    document.write('<br/>');
}

function esDivisible(num, divisor){
    if(num%divisor==0){
        return true;
    }else{
        return false;
    }
}