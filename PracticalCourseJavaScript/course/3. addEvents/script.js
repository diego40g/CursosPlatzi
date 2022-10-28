// Selectores
const h1=document.querySelector('h1');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result');
const fomr=document.querySelector('#form');

//escuchador de eventos
//addEventListener(evento, javaScript)
//btn.addEventListener('click', btnOnClick);
form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event){
    console.log({event});
    event.preventDefault();
    const sumaInputs=parseFloat(input1.value)+parseFloat(input2.value);
    pResult.innerText=`Resultado de ${input1.value} + ${input2.value} = ${sumaInputs}`;
}

