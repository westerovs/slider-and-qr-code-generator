// =====================================================
// ====== захардкоженно! осторожно ! гавнокод ! ========
// ====================== тест =========================
//
// const sliderList = document.querySelector('.slider__list')
// const sliderItem = document.querySelectorAll('.slider__item ')
//
// const prev = document.querySelector('.prev')
// const next = document.querySelector('.next')
//
// const src = [
//     'img/1.jpg',
//     'img/2.jpg',
//     'img/3.jpg',
//     'img/4.jpg',
//     'img/5.jpg',
//     'img/6.jpg',
// ]
//
// let val = 0
//
// prev.addEventListener('pointerdown', () => {
//     sliderList.style.transform = `translateX(-${ val += 500 }px)`
//     if (val >= 1000) {
//         val = 500
//         return
//     }
//     console.log(val)
// })
//
// next.addEventListener('pointerdown', () => {
//     sliderList.style.transform = `translateX(-${ val -= 500 }px)`
//     if (val <= 0) {
//         val = 0
//         return
//     }
// })
//
//
// function transrormItems(node) {
//     let deg = 1
//     node.forEach(item => {
//         item.style.transform = `scale(${ deg })`
//         deg -= 0.1
//     })
// }
//
// transrormItems(sliderItem)

class Gallery {
    constructor() {
        this.sliderList = document.querySelector('.slider__list')
        this.sliderItem = null

        this.prev = document.querySelector('.prev')
        this.next = document.querySelector('.next')

        this.prev.addEventListener('click', this.clickOnPrev)
        this.next.addEventListener('click', this.clickOnNext)

        this.src = null
        this.stepImg = 0  // шаг - опред. какую картинку показывать в основном блоке
        this.offsetImg = 0
    }

    templateImg = (src) => `
        <li class="slider__item">
            <img class="slider__img" src="${ src }" alt="img"/>
        </li>`

    renderTemplate = (container, template, position = 'beforeend') => {
        if (container instanceof Element) {
            container.insertAdjacentHTML(position, template)
        }
    }

    // 1
    getSrc = () => {
        console.log('[1] getSrc')

        this.src = [
            'img/1.jpg',
            'img/2.jpg',
            'img/3.jpg',
            'img/4.jpg',
            'img/5.jpg',
            'img/6.jpg',
        ]
    }

    // 2
    renderImage = () => {
        console.log('[2] render image')

        for (let i = 0; i < this.src.length; i++) {
            this.renderTemplate(this.sliderList, this.templateImg(this.src[i]))
        }
    }

    // 3
    offsetImage = () => {
        console.log('[3] offsetImage')

        this.sliderItem = document.querySelectorAll('.slider__item ')

        this.sliderItem.forEach(item => {
            item.style.transform = `translateX(${ this.offsetImg * 250 }px)`
            this.offsetImg++
        })

        console.log(this.offsetImg)
    }



    clickOnPrev = () => {
        this.sliderImg = document.querySelectorAll('.slider__img')
        console.log('prev',this.sliderImg)
    }

    clickOnNext = () => {
        this.sliderImg = document.querySelectorAll('.slider__img')
        console.log('next',this.sliderImg)
    }

    init = () => {
        console.log('[0] Gallery INIT')
        this.getSrc()        // [1]
        this.renderImage()   // [2]
        this.offsetImage()   // [3]

    }
}

const gallery = new Gallery()
gallery.init()
