/* let country = []
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

document.querySelector('.card').forEach((element)=>{
    console.log(element)
element.addEventListener('click',()=>{
    console.log(document.querySelector('.card h1').innerHTML)
})
})


let prevBtn = document.querySelector('prev');
let nextBtn = document.querySelector('next'); */

let country = [];
let currentPage = 1;
let itemsPerPage = 16;

let prevBtn = document.querySelector('#prev');
let nextBtn = document.querySelector('#next');

prevBtn.addEventListener('click',()=>{
    console.log("prev btn")
    if(currentPage>1){
        currentPage--
        fetchFun()
       
    }

})
nextBtn.addEventListener('click',()=>{
    console.log("next btn")
    currentPage++
    fetchFun()
})

// Fetch all countries data
let fetchFun = async () => {
    try {
        let response = await fetch("https://restcountries.com/v3.1/all");
        let data = await response.json();
        country = data;
        displayCountry(data, currentPage);
    } catch (error) {
        console.log(error);
    }
};

// Display countries based on pagination
function displayCountry(countryData, page) {
    let startIndex = (page - 1) * itemsPerPage;
    let endIndex = page * itemsPerPage;
    let paginatedData = countryData.slice(startIndex, endIndex);

    let container = document.querySelector('.container');
    container.innerHTML = "";

    paginatedData.forEach((value) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'card');
        div.innerHTML = `
            <div><img src="${value.flags.png}" alt="loading..."></div>
            <h1>${value.name.common}</h1>
            <p>Population: <span>${value.population}</span></p>
            <p>Region: <span>${value.region}</span></p>
            <p>Capital: <span>${value.capital}</span></p>`;
        container.appendChild(div);
    });

    setupPagination(countryData.length);
}

// Handle pagination buttons
function setupPagination(totalItems) {
    let totalPages = Math.ceil(totalItems / itemsPerPage);
    let paginationContainer = document.querySelector('.pagination');
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        let button = document.createElement('button');
        button.textContent = i;
        button.classList.add('page-btn');
        if (i === currentPage) button.classList.add('active');

        button.addEventListener('click', () => {
            currentPage = i;
            displayCountry(country, currentPage);
        });

        paginationContainer.appendChild(button);
    }
}

// Search functionality
document.querySelector('.inputdata').addEventListener('input', (e) => {
    let searchData = e.target.value.toLowerCase().trim();
    let filteredData = country.filter(val =>
        val.name.common.toLowerCase().includes(searchData)
    );
    currentPage = 1; // Reset to first page on new search
    displayCountry(filteredData, currentPage);
});

// Toggle filter dropdown
document.querySelector('.filter').addEventListener('click', () => {
    let filter = document.querySelector('.filterlist');
    filter.style.display = filter.style.display === "block" ? "none" : "block";
});

// Fetch countries by region
let regionFun = async (region) => {
    let response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    let regionData = await response.json();
    currentPage = 1; // Reset to first page on new region selection
    displayCountry(regionData, currentPage);
};

// Handle region selection
let liList = document.querySelectorAll('.region');
liList.forEach(li => {
    li.addEventListener('click', () => {
        document.querySelector('.inputdata').value = "";
        regionFun(li.textContent);
        liList.forEach(item => item.classList.remove('active'));
        li.classList.add('active');
    });
});

// Change theme mode
document.querySelector('.changemode').addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});

// Smooth scroll to top
document.querySelector('.toparrow').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Intialize fetch on page load
document.addEventListener('DOMContentLoaded', fetchFun);

