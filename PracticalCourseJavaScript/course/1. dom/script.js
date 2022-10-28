const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const claseParrafito1 = document.querySelector('.parrafito');
const claseParrafito2 = document.getElementsByClassName('parrafito');
const idParrafo1 = document.querySelector('#pid');
const idParrafo2 = document.getElementById('pid');
const input = document.querySelector('input')

console.log(h1.innerHTML);
console.log(h1.outerHTML);

console.log(input.value);

console.log({
    h1,
    p,
    claseParrafito1,
    claseParrafito2,
    idParrafo1,
    idParrafo2,
    input,
});

