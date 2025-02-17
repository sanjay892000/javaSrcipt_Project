let changeMode = document.querySelector(".changemode");
changeMode.addEventListener("click", (e) => {
    let modeText = document.querySelector(".changemode > span");
    if (document.body.classList.contains("light")) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        modeText.innerHTML = "light mode";
    } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        modeText.innerHTML = "dark mode";
    }
});

const parsedUrl = new URL(window.location);
let country = parsedUrl.searchParams.get('country');
console.log(country)