const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');
const form = document.querySelector('#form');
/* const p = document.querySelector('p');
const parrafito = document.querySelector('parrafito'); 
const pid = document.getElementById('pid');*/

btn.addEventListener('click',sumarInputValues);

function sumarInputValues(){
/*     console.log({event});
    event.preventDefault(); */
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}


/*  form.addEventListener('submit',sumarInputValues);

function sumarInputValues(){
    console.log({event});
    event.preventDefault();
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}  */


/* console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML ='Patito <br> Feo';
h1.innerText ='Patito <br> Feo';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class','rojo');
h1.classList.add('rojo');
h1.classList.remove('verde');
const img = document.createElement('img');
img.setAttribute('src','https://ichef.bbci.co.uk/news/800/cpsprodpb/A908/production/_91927234_bmw-moto-futuro.jpg')
console.log(img);
pid.innerHTML="";
pid.append(img); */