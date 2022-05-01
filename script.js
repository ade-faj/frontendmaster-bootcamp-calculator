
let runningTotal = 0;
let buffer = '0';
let previousOperator;

const screen = document.querySelector('#screen');
const calcButtons = document.querySelector('.calc-buttons');




function buttonClick (value) {
    
}

function init () {
    calcButtons.addEventListener('click', function(event){
        console.log(event);
        buttonClick(event.target.innerText);
        
    })
}
init()