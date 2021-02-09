// =====================================================
// ====== захардкоженно! осторожно ! гавнокод ! ========
// ====================== тест =========================

const sliderList = document.querySelector('.slider__list')
const sliderItem = document.querySelectorAll('.slider__item ')

const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let val = 0
prev.addEventListener('pointerdown', () => {
    sliderList.style.transform = `translateX(-${ val += 500 }px)`
    if (val >= 1000) {
        val = 500
        return
    }
    console.log(val)
})

next.addEventListener('pointerdown', () => {
    sliderList.style.transform = `translateX(-${ val -= 500 }px)`
    if (val <= 0) {
        val = 0
        return
    }
})


function transrormItems(node) {
    let deg = 1
    node.forEach(item => {
        item.style.transform = `scale(${ deg })`
        deg -= 0.1
    })
}

transrormItems(sliderItem)
