let clock = document.querySelector('.clock');
let snd = 0;
let mnt = 0;
let hur = 0;


let second = snd.toString().padStart(2,'0')
let minute = mnt.toString().padStart(2,'0')
let hour = hur.toString().padStart(2,'0')
clock.innerHTML = `${hour}:${minute}:${second}`
let interval;
document.querySelector('.start').addEventListener('click', () => {
    interval = setInterval(function () {

        second++
        if (second == 60) {
            second=0
            minute++
        }
        if (minute == 60) {
            minute=0
            hour++
        }
        if (hour == 24) {
            hour = 0;
        }
        
        clock.innerHTML = `${hour.toString().padStart(2,'0')}:${minute.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`
    }, 1000)
})



document.querySelector('.stop').addEventListener('click', () => {
    clearInterval(interval)
})

/* 
let date = document.querySelector('.date');
let myDate = new Date();

console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toTimeString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toDateString()) */