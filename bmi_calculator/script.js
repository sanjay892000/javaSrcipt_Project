/* let height = document.querySelector('#height');
let weight = document.querySelector('#weight'); */
let btn = document.querySelector('.btn-primary');
let form = document.querySelector('form')

form.addEventListener('submit', calculateBMI);

function calculateBMI(event) {
    event.preventDefault();
    let height = form[0].value;
    hInMet = height / 100;
    let weight = form[1].value;
    let valBMI = weight / (hInMet * 2)
    let result = document.querySelector('.result');

    if (valBMI < 18) {
        result.style.color = 'red';
        result.innerHTML = `BMI Value is: ${valBMI.toFixed(2)}, You are Underweight`;
    }
    else if (valBMI <= 24) {
        result.style.color = 'green';
        result.innerHTML = `BMI Value is: ${valBMI.toFixed(2)}, You are Normal Weight`;
    }
    else if (valBMI <= 30) {
        result.style.color = 'orange';
        result.innerHTML = `BMI Value is: ${valBMI.toFixed(2)}, You are Overweight`;
    }
    else {
        result.style.color ='red';
        result.innerHTML = `BMI Value is: ${valBMI.toFixed(2)}, You are Obese`;
    }

}