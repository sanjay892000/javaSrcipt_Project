let hour = 0
let minute = 0
let second = 0
let clock = document.querySelector('.clock');
clock.innerHTML = `${hour.toString().padStart(2, "0")} : ${minute.toString().padStart(2, "0")} : ${second.toString().padStart(2, "0")}`
function StartStopWatch() {
    second++;

    if (second == 60) {
        second = 0
        minute++
    }
    if (minute == 60) {
        minute = 0
        hour++
    }

    console.log(`${hour} : ${minute} : ${second}`)
    clock.innerHTML = `${hour.toString().padStart(2, "0")} : ${minute.toString().padStart(2, "0")} : ${second.toString().padStart(2, "0")}`
}

/* setInterval(StartStopWatch, 1000) */


const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

stopBtn.disabled = true
resetBtn.disabled = true
let refTime;
startBtn.addEventListener('click', () => {
    refTime = setInterval(StartStopWatch, 1000)

    startBtn.disabled = true
    stopBtn.disabled = false
    resetBtn.disabled = false
})

stopBtn.addEventListener('click', () => {
    clearInterval(refTime)

    startBtn.disabled = false
    stopBtn.disabled = true
    resetBtn.disabled = false
})

resetBtn.addEventListener('click', () => {
    clearInterval(refTime)
    second = 0
    minute = 0
    hour = 0

    clock.innerHTML = `${hour.toString().padStart(2, "0")} : ${minute.toString().padStart(2, "0")} : ${second.toString().padStart(2, "0")}`

    startBtn.disabled = false
    stopBtn.disabled = true
    resetBtn.disabled = true
})


let date = new Date()
const dateElm = document.querySelector('.date')
dateElm.innerHTML = date.toLocaleDateString();

setInterval(() => {
    date = new Date()
    dateElm.innerHTML = date.toLocaleDateString();
}, 1000)