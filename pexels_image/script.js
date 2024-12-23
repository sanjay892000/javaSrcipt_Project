let imageBox = document.querySelector('.pexels-images')
let searchBtn = document.querySelector('#search-btn');
let inputData = ''

let page = 1
const apiKeys = 'zGzmASEGcD6yroabMezk3PSnIFFaQK9kdxnRaTZ7VfHVxSZ0ORFqZ8EP';


//fetch image data
const fetchPexelsData = async () => {
    const response = await fetch(`https://api.pexels.com/v1/search?query=${inputData}&page=${page}`, {
        headers: {
            Authorization: apiKeys
        }
    })
    const data = await response.json()
    let allPhotos = data.photos;
    allPhotos.forEach(photo => {
        addElement(photo.src.large, photo.url)
    })
    if (page > 0 && !allPhotos) {
        seeMore.style.display = 'block'
    }
    else {
        seeMore.style.display = 'none'
    }
}


//add image data to the list of photos elements
const addElement = (imageSource, imageUrl) => {
    const newDiv = document.createElement('div');
    newDiv.className = 'search-result';
    newDiv.innerHTML = `<img
    src=${imageSource}
    alt="image"
    />
    <a
    href=${imageUrl}
    target="_blank"
    rel="noopener noreferrer"
    >an image of a beach</a
    >`
    imageBox.appendChild(newDiv)
}

//implement search button
searchBtn.addEventListener('submit', (e) => {
    e.preventDefault();
    page++
    inputData = document.querySelector('#search-input').value;
    imageBox.innerHTML = '';
    console.log(inputData)
    fetchPexelsData()
})
let seeMore = document.querySelector('#show-more-button')

seeMore.addEventListener('click', () => {
    page++
    fetchPexelsData()
})

