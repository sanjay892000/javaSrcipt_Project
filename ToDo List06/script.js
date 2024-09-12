let form = document.querySelector('.todo-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let task = document.querySelector('#todolist');
    let desc = document.querySelector('#desc');
    let listBody = document.querySelector('#list-body');
    let tr = document.createElement('tr');
    tr.style.height="60px"
    tr.style.fontSize="22px"
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    tr.style.alignItems="center"
    let taskVal = document.createTextNode(task.value)
    let descVal = document.createTextNode(desc.value)
    let button = document.createElement('button');
    button.style.height="40px"
    button.style.width="80px"
    button.setAttribute('class','delete');
    button.style.color="white"
    button.style.backgroundColor="red"
    let action = document.createTextNode("Delete")
    button.appendChild(action)
    td1.appendChild(taskVal);
    td2.appendChild(descVal);
    td3.appendChild(button);
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    if(task.value && desc.value){
        listBody.appendChild(tr)
    }
    else{
        alert("please enter Both Value")
    }
    task.value = null;
    desc.value = null;
})

setInterval=()=>{
    let deleteList = document.querySelectorAll('#list-body')
    console.log(deleteList)

}
