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
       countryData.map((value)=>{
        let div = document.createElement('div');
        div.setAttribute('class','card');
        div.innerHTML = `<div><img src=${value.flags.png} alt="loading..."></div>
        <h1>${value.name.common}</h1>
        <p>Population: <span>${value.population}</span></p>
        <p>Region: <span>${value.region}</span></p>
        <p>Capital: <span>${value.capital}</span></p>`
         container.appendChild(div)
       });
}

document.querySelector('.inputdata').addEventListener('input', (e) => {
    let searchData = e.target.value.toLowerCase();
    let search = country.filter(filterFun);
    function filterFun(val) {
        return val.name.common.toLowerCase().includes(searchData)
    }
    console.log(search)
    document.querySelector('.container').innerHTML = " "
    displayCountry(search)
});

