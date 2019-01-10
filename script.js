document.querySelector('.open-modal').addEventListener('click', toggleClass);
document.querySelector('.close-modal').addEventListener('click', toggleClass);
 
function toggleClass(){
    document.querySelector('.modal-background').classList.toggle('visible');
}



const rectangleArea = document.querySelector('.rectangles-container');
const smallBtn = document.querySelector('.size-small');
const mediumBtn = document.getElementById('radio-medium');
const largeBtn = document.getElementById('radio-large');
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
const colorFour = document.querySelector('.four');
const colorFive = document.querySelector('.five');
const colorSix = document.querySelector('.six');
const startBtn = document.querySelector('.position-start');
const endBtn = document.querySelector('.position-end');
const radioBtn = document.getElementById('radio-small');
document.querySelector('.lol').addEventListener('click', createRectangle);

function createRectangle(){
    const rectangleDOM = document.createElement('div');
    rectangleDOM.classList = 'large-rec';
    rectangleArea.appendChild(rectangleDOM);
}
let someArray = [];
smallBtn.addEventListener('click', function(){
   if (radioBtn){
       someArray = [radioBtn.dataset.size];
   }
})
mediumBtn.addEventListener('click', function(){
    if (mediumBtn){
        someArray = [mediumBtn.dataset.size]
    }
})
largeBtn.addEventListener('click', function(){
    if (largeBtn){
        someArray = [largeBtn.dataset.size]
    }
})







