/* Coerción implícita*/
var a=4+"7";
console.log(typeof(a));//string
var b=4*"7";
console.log(typeof(b));//number


/*Coerción explicita*/
var x=20; 
var y=x+""; //implicito
console.log(typeof(b));//string
var z=String(x);//explicita de numero a **string**
console.log(z);//string
var w=Number(z);//explicita de string a **numero**
console.log(w);//number