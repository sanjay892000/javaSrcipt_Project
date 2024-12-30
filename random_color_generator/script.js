/* let btn = document.querySelector('button');
btn.addEventListener('click', genCol);
function genCol() {
    let div = document.querySelector('.color-box');
    let para = document.querySelector('#color');
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    div.style.backgroundColor = color;
    para.innerHTML = `Color: ${color}`
} */


//Hex Code

let btn = document.querySelector('button');
btn.addEventListener('click', genCol);
let colVal = "0123456789ABCDEF"

function genCol() {
    let div = document.querySelector('.color-box');
    let para = document.querySelector('#color');
    let genColor = ""
    for(let i = 0; i < 6; i++){
        let color = Math.floor(Math.random() * 16);
        genColor  += colVal.charAt(color);
     }
    
    div.style.backgroundColor = `#${genColor}`;
    para.innerHTML = `Color: #${genColor}`
}

window.addEventListener("load", genCol);

