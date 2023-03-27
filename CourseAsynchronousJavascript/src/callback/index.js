function sum(num1, num2) {
    return num1 + num2;
}
function rest(num1, num2) {
    return num1 - num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
}

console.log(calc(3, 5, sum));
console.log(calc(3, 5, rest));

// Anonymous function
setTimeout(() => { console.log("Imprime en 2 segundos") }, 2000)

function greeting(name) {
    console.log(`Hola ${name}`)
}
setTimeout(greeting, 2000, 'Diego')