
let score = 0;
let scoreTag = document.querySelector('.score>span');
let form = document.querySelector('#myform');


scoreTag.innerHTML = score;
let valueA;
let valueB;
let taskAns;
let symbol; 
const questionFun = () =>{
    
valueA = Math.floor(Math.random() * 10 + 1);
valueB = Math.floor(Math.random() * 10 + 1);

//operation value
let sum = valueA + valueB;
let subtract;
if (valueA < valueB) {
    valueB = valueA;
    valueB = valueB;
}
subtract = valueA - valueB;

let mul = valueA * valueB;

const result = [sum, subtract, mul];
let operator = ['+', '-', '*'];
let task = Math.floor(Math.random() * operator.length);
taskAns = result[task];
symbol = operator[task];
console.log(valueA, valueB);
console.log(taskAns, symbol);
let questions = document.querySelector('.questions')
questions.innerHTML = `what is answer of ${valueA} ${symbol} ${valueB} ?`;
}

window.addEventListener('load', questionFun)

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputData = Number(document.querySelector('#inputData').value);
    if(inputData == taskAns){
        score+=1;
        scoreTag.innerHTML = score;
        document.querySelector('#inputData').value = ""
    }
    else{
        score-=1;
        scoreTag.innerHTML = score;
        document.querySelector('#inputData').value = ""
    }
    questionFun()
})

