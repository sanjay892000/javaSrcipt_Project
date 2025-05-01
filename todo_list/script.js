let allList = JSON.parse(localStorage.getItem('allList')) || []
console.log(allList)

let form = document.querySelector('.todo-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let title = document.querySelector('#todolist').value;
    let id = Math.floor(Math.random() * 100000000000) + 100000000000;
    
    const list = {
        id: id,
        title: title
    }
    allList.push(list);
    localStorage.setItem('allList', JSON.stringify(allList))
    document.querySelector('#todolist').value = '';
    showList()
})

const showList = () =>{
    let container = document.querySelector('.list-container');
    container.innerHTML = '';
    allList.forEach((list) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'list-items');
        div.innerHTML = `
        <div class="check-items" onclick="complete(this)">
        <input type="checkbox" id=${list.id}>
        <label for=${list.id}>${list.title}</label>
        </div>
        <i class="fa-solid fa-xmark" onclick="deleteFun(this)"></i>`;
        container.appendChild(div)
    })
}

function deleteFun(task) {
    console.log(task.parentElement.children[0].children[0].id)
    let deleteid = task.parentElement.children[0].children[0].id;
    let newList = allList.filter((list) => {
        return list.id != deleteid
    })
    localStorage.setItem('allList', JSON.stringify(newList))
    allList = JSON.parse(localStorage.getItem('allList')) || []
    let element = task.parentElement;
    element.remove()
}

function complete(task) {
    if (task.children[0].checked) {
        task.children[1].style.textDecoration = 'line-through';
        task.children[1].style.color = 'gray';
        task.children[0].disabled = true;
    }
}

window.addEventListener('load', showList)


