//Scope Global
var myFirstName="Diego";
    //Scope Local
    function fun(){
        var myLastName="Paz";
        return `Mi nombre es ${myFirstName} ${myLastName}`;
    }
console.log(fun()); //Mi nombre es Diego Paz

console.log(apellido); //apellido is not defined
