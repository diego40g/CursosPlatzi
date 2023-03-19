const myGlobal = 0;

function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent() {
        const inner = 2;
        console.log(myGlobal, myNumber)
        function child () {
            console.log(myGlobal, myNumber, inner)
        }
        return child()
    }
    return parent();
}

myFunction()