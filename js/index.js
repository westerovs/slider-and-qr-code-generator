const boxList = document.querySelector('.box__list')
const boxItems = Array.from(document.querySelectorAll('.box__item'))
const btnPrev = document.querySelector('.prev')
const btnNext = document.querySelector('.next')

let count = 0
let arrDeg = []

// 1-my
// transform: translateX(200px) translateY(-200px) translateZ(-200px);

function swap(arr) {
    console.log(count)
    return [arr[0], arr[arr.length - count]] = [arr[arr.length - count], arr[0]]
}

function prev() {
    console.log('prev', count)

    boxList.append(boxItems[count])
    if (count >= 0 && count < boxItems.length) {
        count++
    }
    if (count >= boxItems.length) count = 0;

    anim()
}


function anim() {
    console.log('ANIMATE')

    let deg = 100

    boxItems.forEach((item, index) => {
        arrDeg.push([`translateX(${ index * (deg * 2) }px) translateY(-${ index * (deg / 2) }px) translateZ(-${ index * (deg) }px)`])

        item.style.transform = arrDeg[index]
    })
}

anim()
// controls
btnPrev.addEventListener('click', prev)


