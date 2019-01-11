document.querySelector('.open-modal').addEventListener('click', toggleModalClass)
document.querySelector('.close-modal').addEventListener('click', toggleModalClass)

function toggleModalClass() {
    document.querySelector('.modal-background').classList.toggle('visible')
}


const recQueue = document.querySelector('.rec-queue');
const rectangleArea = document.querySelector('.rec-render')

let properties = {
    size: '',
    color: '',
    position: ''
}
document.getElementById('parent-size').addEventListener('click', function (e) {
    if (e.target) {
        properties.size = e.target.dataset.size
    }
})
document.getElementById('parent-color').addEventListener('click', function (e) {
    if (e.target) {
        properties.color = e.target.dataset.color
    }
})
document.getElementById('parent-position').addEventListener('click', function (e) {
    if (e.target) {
        properties.position = e.target.dataset.position
    }
})

document.querySelector('.confirm').addEventListener('click', function () {
    const rec = document.createElement('div')
    const recVisualisation = document.createElement('div')

    rec.classList = properties.size + '-rec' + ' ' + 'recDOM'
    rec.style.backgroundColor = properties.color

    recVisualisation.classList = properties.size + '-rec' + ' ' + 'recDOM-visualised'
    recVisualisation.style.backgroundColor = properties.color
  
    if (properties.position === 'start') {
        rectangleArea.prepend(rec)
        recQueue.prepend(recVisualisation)
    } else if (properties.position === 'end') {
        rectangleArea.appendChild(rec)
        recQueue.appendChild(recVisualisation)
    }
})


