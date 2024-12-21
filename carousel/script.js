let carouselItems = document.querySelectorAll('.carousel-items')
console.log(carouselItems)

let carouselSlider = 0;
carouselItems.forEach((items, index)=>{
    items.style.left=`${index * 100}%`
})

/* const carouselFun = (carouselSlider)=>{
    carouselItems.forEach((items)=>{
        items.style.transform = `translateX(-${carouselSlider * 100}%)`
    })
} */
