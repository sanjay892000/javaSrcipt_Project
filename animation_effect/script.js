

let mainbox = document.querySelector('#main-page');

const effectFun = (e)=>{
   console.log(e.screenX)
   console.log(e.screenY)
   let hoverbox = document.querySelector('.hoverbox');
   hoverbox.style.display = 'block';
   hoverbox.style.top = e.clientY - 200 + 'px';
   hoverbox.style.left = e.clientX - 200 + 'px';
}
const disableEffectFun = ()=>{
   let hoverbox = document.querySelector('.hoverbox');
   hoverbox.style.display = 'none';
}
/* window.addEventListener('load', effectFun) */

mainbox.addEventListener('mouseover',effectFun);
mainbox.addEventListener('mouseleave',disableEffectFun);
