class Gallery {
    constructor() {
        this.sliderList = document.querySelector('.slider__list')
        this.sliderItem = null
        this.sliderImg = null

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
            // 'img/4.jpg',
            // 'img/5.jpg',
            // 'img/6.jpg',
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

        this.sliderItem = Array.from(document.querySelectorAll('.slider__item '))

        this.sliderItem.forEach(item => {
            item.style.transform = `translateX(${ this.offsetImg * 250 }px)`
            this.offsetImg++
        })
    }

    draw = () => {
        console.log('--- draw ---')

        const img = document.createElement('img')
        img.src = this.src[this.stepImg]
        img.classList.add('slider__img')
        img.style.transform = `translateX(${ this.offsetImg * 200 }px)`

        this.sliderList.append(img)

        if (this.stepImg + 1 === this.src.length) {
            this.stepImg = 0
        } else {
            this.stepImg++
        }

        this.offsetImg = 1
    }

    clickOnPrev = () => {
        console.log('prev')

        this.prev.removeEventListener('click', this.clickOnPrev)

        this.sliderImg = document.querySelectorAll('.slider__img')
        let offset2 = 0

        console.log(this.sliderImg)

        for (let i = 0; i < this.sliderImg.length; i++) {
            this.sliderImg[i].style.transform = `translateX(${ offset2 * 200 - 200 }px)`
            offset2++
        }

        setTimeout(() => {
            this.sliderImg[0].remove()
            this.draw()
            this.prev.addEventListener('click', this.clickOnPrev)
        }, 20)
        // this.draw()

        // for (let i = 0; i < this.sliderItem; i++) {
        //     this.renderTemplate(this.sliderList, this.templateImg(this.src[i]))
        // }
    }

    clickOnNext = () => {
        console.log('next',this.sliderItem)
    }

    init = () => {
        console.log('[0] Gallery INIT')
        this.getSrc()        // [1]
        // this.renderImage()   // [2]
        // this.offsetImage()   // [3]
        this.draw()
        this.draw()
    }
}

const gallery = new Gallery()
gallery.init()
