// this is my first step to get data(username) of user
const gitform = document.querySelector('#gitform');
gitform.addEventListener("submit", (e) => {
    e.preventDefault()
    const gitUserName = document.querySelector('#git-user-name').value
    console.log(gitUserName);
    fetchGitData(gitUserName)
})

// this is my second step to fetch github data of user using fetch method
async function fetchGitData(username) {
    try {
        const res = await fetch(`https://api.github.com/users/${username}`)
        const user = await res.json()
        console.log(user);
        displayData(user)
    } catch (error) {
        console.log(error)
    }
}


// this is my third step to display the data of user in html
function displayData(userdata) {
    const userDetails = document.querySelector('#user-details')

    if (userdata.id) {
        userDetails.innerHTML = `<aside>
            <img src="${userdata.avatar_url}" alt="loading...">
        </aside>
        <article id="aboutme">
            <h1>name: <span>${userdata.name}</span></h1>
            <p>Bio: <span>${userdata.bio}.</span></p>
            <p>Location: <span>${userdata.location}</span></p>
            <div class="summary">
                <button>repos: <span>${userdata.public_repos}</span></button>
                <button>followers: <span>${userdata.followers}</span></button>
                <button>following: <span>${userdata.following}</span></button>
            </div>
        </article>`
    }
    else{
        userDetails.innerHTML = `<h1 style="color:orange; font-size:25px;padding:15px 50px;">Invalid User name!</h1>`
    }
}