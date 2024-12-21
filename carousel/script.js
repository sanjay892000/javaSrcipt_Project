let carouselItems = document.querySelectorAll('.carousel-items')

let carouselSlider = 0;
carouselItems.forEach((items, index) => {
    items.style.left = `${index * 100}%`
})

const carouselFun = (carouselSlider) => {
    carouselItems.forEach((items) => {
        items.style.transform = `translateX(-${carouselSlider * 100}%)`
    })
}

let prevBtn = document.querySelector('.prevBtn');
let nextBtn = document.querySelector('.nextBtn');

prevBtn.addEventListener('click', () => {
    carouselSlider--;
    if (carouselSlider < 0) {
        carouselSlider = carouselItems.length - 1;
    }
    carouselFun(carouselSlider);
    console.log(carouselSlider);
    })
    
nextBtn.addEventListener('click', () => {
    carouselSlider++;
    if (carouselSlider > carouselItems.length - 1) {
        carouselSlider = 0;
    }
    carouselFun(carouselSlider);
    console.log(carouselSlider);
})

/* setInterval(() => {
    carouselSlider++;
    if (carouselSlider > carouselItems.length - 1) {
        carouselSlider = 0;
    }
    carouselFun(carouselSlider);
}, 3000); */

