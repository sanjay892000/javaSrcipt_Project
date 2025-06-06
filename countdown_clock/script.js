
const monts = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
]
const days = [
    "sanday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
]

const giveawayDate = new Date(Date.now() + 401800000) ;
let extTime = 'AM'
let time = giveawayDate.getHours()
if (giveawayDate.getHours() >= 12) {
    extTime = 'PM';
    time -= 12;
}

let giveawayp = document.querySelector('.giveaway')
giveawayp.innerHTML = `giveaway ends on ${days[giveawayDate.getDay()]}, ${giveawayDate.getDate()} ${monts[giveawayDate.getMonth()]} ${giveawayDate.getFullYear()} ${time}:${giveawayDate.getMinutes()}${extTime}`;


const countdown = setInterval(() => {
    const now = new Date();
    const diff = giveawayDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    console.log(days, hours, minutes, seconds);

    let daysTag = document.querySelector('#days').innerHTML=days;
    let hoursTag = document.querySelector('#hours').innerHTML=hours;
    let minutesTag = document.querySelector('#mins').innerHTML=minutes;
    let secondsTag = document.querySelector('#seconds').innerHTML=seconds;
},1000)




