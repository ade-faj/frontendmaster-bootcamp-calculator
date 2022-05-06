
let runningTotal = 0;
let buffer = '0';
let previousOperator;

const screen = document.querySelector('#screen');
const calcButtons = document.querySelector('.calc-buttons');




function buttonClick (value) {
    if (isNaN(value)) { //used  to check if what is pressed is a symbol or number
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
}


function handleSymbol(symbol) {

}


function handleNumber(numberString) {
    if (buffer === '0') {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
    screen.innerText = buffer;
}

function init () {
    calcButtons.addEventListener('click', function(event){
        console.log(event);
        buttonClick(event.target.innerText);
        
    })
}
init()