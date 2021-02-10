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
        this.sliderItem = document.querySelectorAll('.slider__item ')
        this.sliderImg = null

        this.prev = document.querySelector('.prev')
        this.next = document.querySelector('.next')

        this.prev.addEventListener('click', this.clickOnPrev)
        this.next.addEventListener('click', this.clickOnNext)

        this.src = null
        this.stepImg = 0
    }

    getSrc = () => {
        this.src = [
            'img/1.jpg',
            'img/2.jpg',
            'img/3.jpg',
            'img/4.jpg',
            'img/5.jpg',
            'img/6.jpg',
        ]
    }

    renderImage = () => {
        console.log('render image')

        this.sliderItem.forEach(item => {
            const img = document.createElement('img')
            img.classList.add('slider__img')
            img.setAttribute('src', this.src[this.stepImg])

            this.stepImg++
            item.append(img)
        })
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
        console.log('Gallery INIT')
        this.getSrc()
        this.renderImage()
    }
}

const gallery = new Gallery()
gallery.init()
