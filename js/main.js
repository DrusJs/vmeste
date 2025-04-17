const burgerMenu = document.querySelector('#burger-menu')
const burgerButton = document.querySelector('#burger-button')

if (burgerMenu && burgerButton) {
    burgerButton.addEventListener('click', ()=>{
        burgerButton.classList.toggle('active')

        if (burgerButton.classList.contains('active')) {
            burgerMenu.classList.add('active')
        } else {
            burgerMenu.classList.remove('active')            
        }
    })
}



const swiperMain = new Swiper(".support-section__swiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 80,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


const swiperNews = new Swiper(".news-section__swiper", {
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 80,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});