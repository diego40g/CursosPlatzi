//varaible

var a; //declaration
var b='b' //declaration - asignation
b='bb' //reasignacion
var a = 'aa' //redeclaration

//Global scope
var fruit = "Apple"; //global
console.log(fruit)

function bestFruit() {
    console.log(fruit)
}

bestFruit();

function countries() {
    country='Ecuador'; ///asignacion
    console.log(country)
}

countries()
console.log(country)
