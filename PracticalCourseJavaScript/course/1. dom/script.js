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

h1.innerText='Patito <br> Inner';
// h1.innerHTML='Patito <br> Inner';
// h1.outerHTML='Patito Outer';
console.log(h1.getAttribute('pantalla'));
console.log(input.getAttribute('class'));
input.setAttribute('class','registro')
console.log(input.getAttribute('class'));

input.classList.add('rojo');
input.classList.add('verde');
input.classList.remove('verde');
input.classList.toggle('rojo');//agrega si tengo o quita si no tengo
input.classList.contains('rojo');//condicional que devuelve true o false si tiene la clase


input.value="456"

//añadir nuevo elemento
console.log(document.createElement('span'));
const imagen=document.createElement('img');
imagen.src="https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png";
imagen.style.width='520px';
//imagen.src=('src','https://josefacchin.com/wp-content/uploads/2020/02/como-quitar-el-fondo-de-una-imagen.png');
console.log(imagen);

idParrafo1.append(imagen);
/**
 * idParrafo1.innerHTML="";
 * idParrafo1.appendChild(imagen); agrega la imagen manteniendo el contenido anterior
 * */