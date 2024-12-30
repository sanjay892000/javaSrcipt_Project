let body = document.querySelector('body');
let btn = document.querySelectorAll('.btnbox>button');

btn.forEach((element)=>{
 element.addEventListener('click',(e)=>{
    body.style.backgroundColor=e.target.value;
 })
})