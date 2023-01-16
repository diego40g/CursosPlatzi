//Synchronous
console.log("1");
console.log("2");
console.log("4");
console.log("3");

//Asynchronous
console.log("1");
console.log("2");
setTimeout(() => {
    console.log("4");
},500)
console.log("3");