

const gitTime = () => {
    let currDate = new Date();
    let hour = document.querySelector('#hour')
    let hoursTime = String(currDate.getHours());
    if(hoursTime>=12){
        hour.innerHTML = String(hoursTime - 12).padStart(2, '0');
    }
    else{
        hour.innerHTML = String(hoursTime).padStart(2,'0');
    }
    let minutes = document.querySelector('#minutes')
    minutes.innerHTML = String(currDate.getMinutes()).padStart(2, '0');
    let second = document.querySelector('#second')
    second.innerHTML = String(currDate.getSeconds()).padStart(2, '0');
    let ampm = document.querySelector('#ampm');
    if (currDate.getHours() >= 12) {
        ampm.innerHTML = 'PM';
    } else {
        ampm.innerHTML = 'AM';
    }
}

setInterval(gitTime, 1000);