document.body.style.backgroundColor = "#5e5e5e";
document.body.style.color = "white";

/* function elementFun(tagName,colorName,className,content,seterName,seterValue,margin) {
    let mainPage = document.querySelector('.main-page');
    let tagname = document.createElement(tagName)
    tagname.className = `${className}`;
    tagname.setAttribute(`${seterName}`, `${seterValue}`);
    tagname.style.color = `${colorName}`;
    tagname.style.margin = `${margin}`;
    tagname.innerHTML = `${content}`;
    mainPage.appendChild(tagname)
}
elementFun('p','red','ptag','i am p tag','title','i am title','20px');
elementFun('h1','green','htag','i am h1 tag','title','i am title','20px');
elementFun('div','yellow','divtag','i am div tag','title','i am title','20px');
elementFun('input','','input','','type','text','20px');
elementFun('input','','input','','type','file','20px');
elementFun('input','','input','','type','range','20px');
elementFun('img','','input','','src','https://i.redd.it/7bwbebejt7i31.png','20px');
elementFun('input','','input','','type','password','20px'); */

/* let data = Math.floor(Math.random()*255)
console.log(data)
 let div = document.querySelector('div');
 console.dir(div)
 div.addEventListener('click',(e)=>{
    console.log(e.target.innerHTML)
 }) */

/* div.innerHTML=`<h1>i'm generated div elements</h1>`; */
//or
/* 
document.body.appendChild(div)
let div1 = document.querySelector('div');
div1.className = "main-page";
div1.id = "myId";
div1.setAttribute("title", "i'm generated div");
div1.style.color = "red";
div1.innerHTML = `<p>i'm generated p elements</p>`;
document.body.appendChild(div1) */
/* let page = document.querySelector('.content');
console.log(page)
page.appendChild(div); */

/* let ele = document.createElement('div');
ele.id="don";

ele.style.color="green"
ele.innerHTML=`<h1>heading</h1>`
page.appendChild(ele) */
/* let h1 = document.querySelector('h1');
let text1 = h1.innerHTML = `<p>I am append in h1 tag</p>`;

h1.appendChild(text1); */
/* let li = document.createElement('li')
li.innerHTML="i am li"

let con = document.querySelector('.content');
console.log(con.parentElement)
console.log(con.nextElementSibling)
console.log(con.childNodes) */


//parentElement
//children
//nextElementSibling
//childNodes
//insertBefore('new','ext')
//replaceChild('new','ext')
//replaceWith('new','ext')
//remove(element name)

/* 
//How to create any element step by step

//syntax for creating an element/tag
let tagName = document.createElement('div');

//syntax for adding id
 tagName.id = 'myDiv'; 
 //or
 tagName.setAttribute('id','idName') //best approach

 //syntax for adding class
 tagName.className = 'myClass';
 //or
 tagName.setAttribute('class','className') //best approach

 //syntax for adding attribute
 tagName.setAttribute('title', 'This is div tag');

 //syntax for adding style(color)
 tagName.style.color = 'red'; //you can add more css

 //syntax for adding style(backgroundColor)
 tagName.style.backgroundColor = 'yellow';

 //for add inner html
 tagName.innerHTML = 'JavaScript arrays are resizable '; //replace element so poor approach
 //or
 // syntax for creating text node
 let text = document.createTextNode('JavaScript arrays are resizable ') //best approach
 
 //syntax for adding/append text in div element/tag
 tagName.appendChild(text)

 let body = document.querySelector('body') //syntax for access element

 //syntax for append child in html body
 body.appendChild(tagName);
 //or
 document.body.appendChild(tagName); */

 let doc = document.querySelector('.main-page')
 console.log(doc.children)
 console.log(doc.nextElementSibling)
 console.log(doc.parentElement,25)