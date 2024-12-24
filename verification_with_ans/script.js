
let score = 0;
let scoreTag = document.querySelector('.score>span');
let form = document.querySelector('#myform');


scoreTag.innerHTML = score;
const questionFun = () =>{
    
let valueA = Math.floor(Math.random() * 20 + 1);
let valueB = Math.floor(Math.random() * 10 + 1);

//operation value
let sum = valueA + valueB;
let subtract;
if (valueA < valueB) {
    let revData = valueB
    valueB = valueA;
    valueA = revData;
}
subtract = valueA - valueB;
let mul = valueA * valueB;
const result = [sum, subtract, mul];
let operator = ['+', '-', '*'];
let task = Math.floor(Math.random() * operator.length);
localStorage.setItem('taskAns', result[task]);
let symbol = operator[task];
console.log(valueA, valueB);
let questions = document.querySelector('.questions')
questions.innerHTML = `what is answer of ${valueA} ${symbol} ${valueB} ?`;
}

window.addEventListener('load', questionFun)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputData = Number(document.querySelector('#inputData').value);
    if(inputData == localStorage.getItem('taskAns')){
        score+=1;
        scoreTag.innerHTML = score;
        localStorage.removeItem('taskAns');
        document.querySelector('#inputData').value = ""
    }
    else{
        score-=1;
        scoreTag.innerHTML = score;
        localStorage.removeItem('taskAns');
        document.querySelector('#inputData').value = ""
    }
    questionFun()
})

