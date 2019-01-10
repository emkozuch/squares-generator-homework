document.querySelector('.open-modal').addEventListener('click', function(){
    document.querySelector('.modal-background').classList.toggle('visible');
})
document.querySelector('.close-modal').addEventListener('click', function(){
    document.querySelector('.modal-background').classList.toggle('visible');
})
document.querySelector('.one').addEventListener('click', function(){
    console.log(this.dataset.color);
})
document.querySelector('.two').addEventListener('click', function(){
    console.log(this.dataset.color);
})
document.querySelector('.three').addEventListener('click', function(){
    console.log(this.dataset.color);
})
document.querySelector('.four').addEventListener('click', function(){
    console.log(this.dataset.color);
});

const rectangleArea = document.querySelector('.rectangles-container');

document.querySelector('.lol').addEventListener('click', createRectangle);

function createRectangle(){
    const rectangleDOM = document.createElement('div');
    rectangleDOM.classList = 'large-rec';
    rectangleArea.appendChild(rectangleDOM);
}



    
