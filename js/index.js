const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    loop: true,
});



const slides = Array.from(document.querySelectorAll('.swiper-slide'))
const activeSlide = document.querySelector('.swiper-slide-active')

slides.forEach((item, index) => {
    // item.innerText = `slider ${ index }`

    if (item.classList.contains('swiper-slide-active')) item.style.outline = '3px dashed red'
})




