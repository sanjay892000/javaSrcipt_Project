let form = document.querySelector('#gitform');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let username = document.querySelector('#git-user-name').value;
  fetchAPI(username);
})

let fetchAPI = async (username) => {
  let URL = `https://api.github.com/users/${username}`
  let data = await fetch(URL);
  let userData = await data.json();
  console.log(userData);
  let userDetailsBox = document.querySelector('#user-details');
  userDetailsBox.innerHTML = `<aside>
            <img src=${userData.avatar_url} alt="loading...">
        </aside>
        <article id="aboutme">
            <h1>name: <span>${userData.name}</span></h1>
            <p>Bio: <span>${userData.bio}.</span></p>
            <p>Location: <span>${userData.location}</span></p>
            <div class="summary">
                <button>repos: <span>${userData.public_repos}</span></button>
                <button>followers: <span>${userData.followers}</span></button>
                <button>following: <span>${userData.following}</span></button>
            </div>
        </article>`
}
