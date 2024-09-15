let form = document.querySelector('.todo-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let task = document.querySelector('#todolist');
    let data = task.value;
    let div = document.createElement('div');
    let id = Math.floor(Math.random()*100000000000)+100000000000;
    div.setAttribute('class','list-items')
    div.innerHTML=`
    <div class="check-items">
    <input type="checkbox" id=${id}>
    <label for=${id} onclick="complete(this)">${data}</label>
    </div>
    <i class="fa-solid fa-xmark" onclick="deleteFun(this)"></i>`;
    let container = document.querySelector('.list-container');
    container.appendChild(div)
})

function deleteFun(task) {
    let element = task.parentElement;
    element.remove()
  
}

function complete(task){
    let check = task.parentElement.children[0]
    task.style.textDecoration="line-through"
    task.style.color="gray"
    check.setAttribute('disabled',"")
}



/* function deleteFun() {
    console.log("i am clidfg");
    
    let deleteBtn = document.querySelectorAll('.fa-solid')
    deleteBtn.forEach((value) => {
        value.addEventListener('click', (e) => {
            let element = value.parentElement;
            element.remove()
        })
    })
} */