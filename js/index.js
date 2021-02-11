const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 300,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        slideShadows: false,
    },
});




console.log(swiper)

const wrapper = document.querySelector('.swiper-wrapper')
const slides = Array.from(document.querySelectorAll('.swiper-slide'))

let count = 0
let arrDeg = []

function anim() {
    console.log('ANIMATE')
    let deg = 100
    let scale = 1

    slides.forEach((item, index) => {
        arrDeg.push([`translateX(${ index }px) translateY(-${ index }px) translateZ(-${ index }px) scale(${ scale })`])

        item.innerText = `slider ${ index }`
        // item.style.transform = arrDeg[index]
        //
        // scale -= 0.2
        // if (scale <= 0) scale = 0
        //
        // if (item.classList.contains('swiper-slide-active')) {
        //     item.style.transform = `translateX(${ index }px) translateY(-${ index }px) translateZ(-${ index }px) scale(${ 1 })`
        // }
    })
}

anim()























