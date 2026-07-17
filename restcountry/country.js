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

const backButton = document.querySelector('.back');
backButton.addEventListener('click', () => {
    window.history.back();
});


async function fetchCountryData(countryid) {
    try {
        const response = await fetch(`https://restapi-sot8.onrender.com/api.restcountry/v3/country/${countryid}`);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            displayCountryDetails(data);
        } else {
            console.error('Error fetching country data:', response.status);
        }
    } catch (error) {
        console.error('Error fetching country data:', error);
    }
}
window.addEventListener('load', () => {
    const parsedUrl = new URL(window.location);
    let countryid = parsedUrl.searchParams.get('countryid');
    if (countryid) {
        fetchCountryData(countryid);
    }
});

function displayCountryDetails(country) {
    const countryDetailsContainer = document.querySelector('.flag-info');
    countryDetailsContainer.innerHTML = `<img src="${country?.results?.flags?.png}" alt="State Flag" class="more-info-image" />
            <div class="info">
                <div class="grid-infos">
                    <h1 class="region-name">${country?.results?.name.common}</h1>
                    <p class="native-name info-name">
                        Native Name:
                        <span class="nativeName">${country?.results?.name?.official}</span>
                    </p>
                    <p class="population info-name">
                        Population:
                        <span class="populationNumber">${country?.results?.population}</span>
                    </p>
                    <p class="region info-name">
                        Region:
                        <span class="regionName">${country?.results?.region}</span>
                    </p>
                    <p class="info-name">
                        Sub Region:
                        <span class="subRegion">${country?.results?.subregion}</span>
                    </p>
                    <p class="capital info-name">
                        Capital:
                        <span class="capitalName">${country?.results?.capital?.[0] || 'N/A'}</span>
                    </p>
                    <p class="domain info-name">
                        Top Level Domain:
                        <span class="levelDomain">${country?.results?.tld?.[0] || 'N/A'}</span>
                    </p>
                    <p class="currencie info-name">
                        Currencies:
                        <span class="currencies">${country?.results?.currencies ? Object.values(country?.results?.currencies).map(c => c.name).join(', ') : 'N/A'}</span>
                    </p>
                    <p class="language info-name">
                        Languages:
                        <span class="languagues">${country?.results?.languages ? Object.values(country?.results?.languages).join(', ') : 'N/A'}</span>
                    </p>
                </div>
                <section class="border-countries">
                    <p class="countriesTitle">Border Countries:</p>
                    <ul class="countriesList"></ul>
                </section>
            </div>`;
}