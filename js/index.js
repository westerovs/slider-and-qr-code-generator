const srcArr = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
];

// ======================================
const sliderWrapper = document.querySelector('.swiper-wrapper')
const templateElement = document.querySelector('.swiper-template')

function createSlide(src, index) {
    const slideTemplateElement = templateElement.content.cloneNode(true)

    slideTemplateElement.querySelector('span').textContent = index
    slideTemplateElement.querySelector('.slider-img').src = src

    sliderWrapper.append(slideTemplateElement)
}

async function renderSlides() {
    const resp = await srcArr.forEach((item, index) => {
        createSlide(item, index)
    })
}

async function response() {
    await renderSlides().then(data => {
        const slidesElement = document.querySelectorAll('.swiper-slide')

        return new Swiper('.swiper-container', {
            effect         : 'coverflow',
            grabCursor     : true,
            centeredSlides : true,
            slidesPerView  : 'auto',
            coverflowEffect: {
                rotate      : 0,
                stretch     : 220,
                depth       : 100,
                modifier    : 1,
                slideShadows: true,
            },
            pagination: {
                el: '.swiper-pagination',
            },
            loop: (slidesElement.length >= 3), // если > то бесконечность и ещё дальше !
        });
    })
}

response()























