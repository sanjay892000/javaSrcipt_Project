let form = document.querySelector('form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let username = event.target.children[0].value;
    fetchAPI(username);
})

let  fetchAPI=async(username)=>{
   let URL = `https://api.github.com/users/${username}`

 let data = await fetch(URL);
 let userData = await data.json();
   console.log(userData);
   console.log(userData.name)

}

