let clock = document.querySelector('.clock');
let snd = 0;
let mnt = 0;
let hur = 0;


let second = snd.toString().padStart(2, '0')
let minute = mnt.toString().padStart(2, '0')
let hour = hur.toString().padStart(2, '0')
clock.innerHTML = `${hour}:${minute}:${second}`
let interval;

let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop')
let resetBtn = document.querySelector('.reset')
stopBtn.disabled = true;
resetBtn.disabled = true;



startBtn.addEventListener('click', () => {
    interval = setInterval(function () {

        second++
        if (second == 60) {
            second = 0
            minute++
        }
        if (minute == 60) {
            minute = 0
            hour++
        }
        if (hour == 24) {
            hour = 0;
        }

        clock.innerHTML = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`
    }, 1000)
    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = false;
})



stopBtn.addEventListener('click', () => {
    clearInterval(interval)
    stopBtn.disabled = true;
    startBtn.disabled = false;
})

resetBtn.addEventListener('click', ()=>{
    clearInterval(interval)
    clock.innerHTML = `00:00:00`;
    startBtn.disabled = false;
    stopBtn.disabled = true;
    resetBtn.disabled = true;
})
let date = document.querySelector('.date');
let myDate = new Date();
date.innerHTML = `${myDate.getDate()}/${myDate.getMonth()+1}/${myDate.getFullYear()}`

/* 
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toTimeString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toDateString()) */