/* let height = document.querySelector('#height');
let weight = document.querySelector('#weight'); */
let btn = document.querySelector('.btn-primary');
let form = document.querySelector('form')

form.addEventListener('submit',calculateBMI);

function calculateBMI(event){
    event.preventDefault();
    let height = form[0].value;
    hInMet = height/100;
    let weight = form[1].value;
    let valBMI = weight/(hInMet*2)
    let result = document.querySelector('.result');
    result.innerHTML=valBMI.toFixed(2);
}