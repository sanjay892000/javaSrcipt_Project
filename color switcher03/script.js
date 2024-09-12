let box = document.getElementsByClassName("box");
let body = document.querySelector('body');
let data = document.querySelectorAll('.box')
console.log(box);
console.log(data);

data.forEach((element)=>{
   console.log(element)
 element.addEventListener('click',(e)=>{
    body.style.backgroundColor=e.target.id;
 })
})