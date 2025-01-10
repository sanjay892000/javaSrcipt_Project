let subfilter = document.querySelector(".subfilter");
let filterlist = document.querySelector(".filterlist");
let icons = document.querySelector(".fa-sort-down");
subfilter.addEventListener("click", (e) => {
    //   filterlist.style.display = filterlist.style.display == "block" ? "none" : "block";
    if (filterlist.style.display == "block") {
        filterlist.style.display = "none";
        icons.style.transform = "rotate(90deg)";
    } else {
        filterlist.style.display = "block";
        icons.style.transform = "rotate(0deg)";
    }
});

//toggle mode switcher

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

//fetch data from restcountries api

let container = document.querySelector(".container");
let myCountry = [];
let page = 1;
let pageItems = 16;
let totalPage;

const fechfun = async () => {
    const URLs = "https://restcountries.com/v3.1/all";
    let response = await fetch(URLs);
    let data = await response.json();
    myCountry = data;
    displayCountryFun(data);
};
window.addEventListener("load", fechfun);

//show items on web page

const displayCountryFun = (country) => {
    let startIndex = (page - 1) * pageItems;
    let endIndex = page * pageItems;
    let newCountry = country.slice(startIndex, endIndex);

    container.innerHTML = "";
    newCountry.forEach((element) => {
        // let mycard = `<div class="card">
        //           <div><img src=${element.flags.png} alt="loading..."></div>
        //           <h1>${element.name.common}</h1>
        //           <p>Population: 1410000000</span></p>
        //           <p>Region: <span>Asia</span></p>
        //           <p>Capital: Delhi</span></p>
        //        </div>`   // like as text

        const mycard = document.createElement("div");
        mycard.classList.add("card");
        mycard.innerHTML = `<div><img src="${element.flags.png}" alt="loading..."></div>
    <h1>${element.name.common}</h1>
    <p>Population: ${element.population}</p>
    <p>Region: ${element.region}</p>
    <p>Capital: ${element.capital}</p>`;
        container.appendChild(mycard);
    });
};

//add scroll  functionality

let toparrow = document.querySelector(".toparrow");
toparrow.addEventListener("click", (e) => {
    console.log(window);
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// search functionality

let inputdata = document.querySelector(".inputdata");

inputdata.addEventListener("input", (e) => {
    let myData = myCountry.filter((value) => {
        return value.name.common
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
    });
    displayCountryFun(myData);
});

//add next page functionality

let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");

nextBtn.addEventListener("click", (e) => {
    totalPage = Math.ceil(myCountry.length / pageItems);
    console.log(totalPage);
    if (page >= totalPage) {
        nextBtn.disabled = true;
        return;
    }
    page++;
    console.log(page);
    displayCountryFun(myCountry);
    prevBtn.disabled = false;
});

//add prev page functionality
if (page <= 1) {
    prevBtn.disabled = true;
}
prevBtn.addEventListener("click", (e) => {
    if (page > 1) {
        page--;
        console.log(page);
        displayCountryFun(myCountry);
        nextBtn.disabled = false;
    }
});

// filter functionality

const filterFun = async (region) => {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await res.json();
    myCountry = data;
    displayCountryFun(data)
};

let regionList = document.querySelectorAll('.region');

regionList.forEach((list) => {
    list.addEventListener('click', (e) => {
        page = 1;
        filterFun(e.target.innerHTML)
        if (filterlist.style.display == "block") {
            filterlist.style.display = "none";
            icons.style.transform = "rotate(90deg)";
        }
        inputdata.value = "";
    })
})


let allCountry = document.querySelector('.allcountry');

allCountry.addEventListener('click', () => {
    page = 1;
    fechfun()
    if (filterlist.style.display == "block") {
        filterlist.style.display = "none";
        icons.style.transform = "rotate(90deg)";
    }
    inputdata.value = "";
})