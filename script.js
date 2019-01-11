document.querySelector('.open-modal').addEventListener('click', toggleModalClass);
document.querySelector('.close-modal').addEventListener('click', toggleModalClass);
 
function toggleModalClass(){
    document.querySelector('.modal-background').classList.toggle('visible');
}



const rectangleArea = document.querySelector('.rectangles-container');
const smallBtn = document.getElementById('radio-small');
const mediumBtn = document.getElementById('radio-medium');
const largeBtn = document.getElementById('radio-large');
const colorOne = document.getElementById('radio-color-one');
const colorTwo = document.getElementById('radio-color-two');
const colorThree = document.getElementById('radio-color-three');
const colorFour = document.getElementById('radio-color-four');
const colorFive = document.getElementById('radio-color-five');
const colorSix = document.getElementById('radio-color-six');
const startBtn = document.getElementById('.position-start');
const endBtn = document.getElementById('.position-end');


let properties = {
    size: '',
    color: '',
    position: ''
}
   function Rectangle(size,color,position){
       this.size = size
       this.color = color
       this.position = position
   } 

smallBtn.addEventListener('click', function(){
   if (smallBtn){
       properties.size = smallBtn.dataset.size;
   }
})
mediumBtn.addEventListener('click', function(){
    if (mediumBtn){
        properties.size = mediumBtn.dataset.size
    }
})
largeBtn.addEventListener('click', function(){
    if (largeBtn){
        properties.size = largeBtn.dataset.size
    }
})
let selectedColor = ''
colorOne.addEventListener('click', function(){
    if (colorOne){
        properties.color = colorOne.dataset.color;
        selectedColor = properties.color;
    }
})
colorTwo.addEventListener('click', function(){
    if (colorTwo){
        properties.color = colorTwo.dataset.color;
        selectedColor = properties.color;
    }
})

document.querySelector('.confirm').addEventListener('click', function(){
   const rec = document.createElement('div')
   rec.classList = properties.size + '-rec'
   rec.style.backgroundColor = selectedColor ;
   rectangleArea.appendChild(rec)
})







