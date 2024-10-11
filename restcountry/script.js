let country = []
let fetchFun = async () => {
    try {
        let response = await fetch("https://restcountries.com/v3.1/all");
        let data = await response.json()
        data.forEach(element => {
            country.push(element)
        });
        displayCountry(data)
    } catch (error) {
        console.log(error)
    }
}
document.body.addEventListener('onload', fetchFun())
let container = document.querySelector('.container');
function displayCountry(countryData) {
    document.querySelector('.container').innerHTML = " ";
    countryData.map((value) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = `<div><img src=${value.flags.png} alt="loading..."></div>
        <h1>${value.name.common}</h1>
        <p>Population: <span>${value.population}</span></p>
        <p>Region: <span>${value.region}</span></p>
        <p>Capital: <span>${value.capital}</span></p>`
        container.appendChild(div)
    });
}

document.querySelector('.inputdata').addEventListener('input', (e) => {
    let searchData = e.target.value.toLowerCase().trim();
    let search = country.filter(filterFun);
    function filterFun(val) {
        return val.name.common.toLowerCase().includes(searchData)
    }
    console.log(search)
    document.querySelector('.container').innerHTML = " "
    displayCountry(search)
});


document.querySelector('.filter').addEventListener('click', () => {
    let filter = document.querySelector('.filterlist')
    filter.style.display == "block" ? filter.style.display = "none" : filter.style.display = "block";
})


let regionFun = async (region) => {
    let response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    let resgionData = await response.json();
    document.querySelector('.container').innerHTML = " "
    displayCountry(resgionData)
}

let liList = document.querySelectorAll('.region');

liList.forEach(li => {

    li.addEventListener('click', () => {
        document.querySelector('.inputdata').value = ""
        regionFun(li.textContent)
        liList.forEach(item => {
            item.classList.remove('active')
        })
        li.classList.add('active')

    })
})


document.querySelector('.changemode').addEventListener('click', () => {
    if (document.body.classList == "light") {
        document.body.classList.remove("light")
        document.body.classList.add("dark")
    }
    else {
        document.body.classList.remove("dark")
        document.body.classList.add("light")
    }
})


document.querySelector('.toparrow').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})