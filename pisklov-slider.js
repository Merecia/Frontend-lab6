
const container = document.querySelector('.container')
const rightButton = document.querySelector('.rightButton')
const leftButton = document.querySelector('.leftButton')
const list = document.querySelector('.list')
const images = document.querySelectorAll('.image')

const config = {
    width: '1200px', // ширина контейнера
    activeSlides: 3, // количество активных слайдов
    speed: '1s', // скорость, с которой будут меняться слайды
}

let width, activeSlides, speed

if ( config.width ) width = config.width
else width = container.dataset.width

if ( config.activeSlides ) activeSlides = config.activeSlides 
else activeSlides = container.dataset.activeSlides

if ( config.speed ) speed = config.speed
else speed = container.dataset.speed

container.style.width = width
list.style.transition = speed

const margin = 20

/* Определяем размер каждой картинки на слайдере с 
учётом отступтов, ширины контейнера и с учётом количества активных слайдов */
let imageWidth = ( parseInt(width) - margin * (activeSlides + 1) ) / activeSlides

images.forEach( (image, index) => {

    image.style.width = `${imageWidth}px`

    if (index != 0)
        image.style.marginRight = `${margin}px`

    else if (index == 0) {
        image.style.marginLeft = `${margin}px`
        image.style.marginRight = `${margin}px`
    }

})

let position = 0
let counter = 0
leftButton.disabled = true

function changeButtonState(counter) {

    if (counter == 0) leftButton.disabled = true
    
    if (counter > 0) leftButton.disabled = false

    if (counter < (images.length - activeSlides) ) rightButton.disabled = false

    if (counter == (images.length - activeSlides) ) rightButton.disabled = true

}

leftButton.addEventListener('click', () => {

    position += (imageWidth + margin)

    list.style.transform = `translateX(${position}px)`

    counter--

    changeButtonState(counter)
})

rightButton.addEventListener('click', () => {

    position -= (imageWidth + margin)

    list.style.transform = `translateX(${position}px)`

    counter++

    changeButtonState(counter)
})