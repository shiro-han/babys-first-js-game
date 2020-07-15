const gameWindow = document.getElementById('game');
const title = document.createElement('h1'); title.textContent = "Baby's First JS Game";
const subtitle = document.createElement('h3'); subtitle.textContent = "by Shiro Han";
const header = document.createElement('h2'); header.textContent = "Instructions";
const instructions = document.createElement('p');
instructions.textContent = `
Click the game window for inputs to be registered. Arrow Keys to Move. Hold A to Run
`

gameWindow.insertAdjacentElement('beforebegin', title);
gameWindow.insertAdjacentElement('beforebegin', subtitle);
gameWindow.insertAdjacentElement('afterend', header);
header.insertAdjacentElement('afterend', instructions);

let dodger = document.getElementById("dodger");
let dodgerWidth = dodger.scrollWidth;
let dodgerHeight = dodger.scrollHeight;
dodger.style.bottom = "180px";
dodger.style.backgroundColor = "#FF69B4";



function moveDodger(direction, run=false){
    let movementValue; let leftNumbers; let left; let bottomNumbers; let bottom;
    if (run === false) {movementValue = 3}
    else {movementValue = 6;}
    

    switch (direction) {
        case 'left':
            leftNumbers = dodger.style.left.replace("px", "");
            left = parseInt(leftNumbers, 10);
    
            if (left > 0) {dodger.style.left = `${left - movementValue}px`}
            break;

        case 'right':
            leftNumbers = dodger.style.left.replace("px", "");
            left = parseInt(leftNumbers, 10);
            
            if (left < 400 - dodgerWidth) {dodger.style.left = `${left + movementValue}px`}
            break;

        case 'up':
            bottomNumbers = dodger.style.bottom.replace("px", "");
            bottom = parseInt(bottomNumbers, 10);
            
            if (bottom < 400 - dodgerHeight) {dodger.style.bottom = `${bottom + movementValue}px`}
            break;
        
        case 'down':
            bottomNumbers = dodger.style.bottom.replace("px", "");
            bottom = parseInt(bottomNumbers, 10);
            
            if (bottom > 0) {dodger.style.bottom = `${bottom - movementValue}px`}
            break;

        default:
            break;
    }
}

let inputs = {};
let controls = {
    left: 'ArrowLeft',
    right: 'ArrowRight',
    down: 'ArrowDown',
    up: 'ArrowUp',
    run: 'a'
};

function createMovement(myHash) {
    let inputArray = Object.keys(myHash);
    let run = false;
    if (inputArray.includes(controls['run'])) {run = true;}

    inputArray.forEach(input => {
        if (input === controls['left']) {moveDodger('left', run)}
        if (input === controls['right']) {moveDodger('right', run)}
        if (input === controls['up']) {moveDodger('up', run)}
        if (input === controls['down']) {moveDodger('down', run)}
    })
}

gameWindow.addEventListener("keydown", function(e) {
    controlsArray = Object.values(controls);
    controlsArray.forEach(control => {
        if (e.key === control) {inputs[e.key] = true;}
    })

    createMovement(inputs)
    
});

document.addEventListener('keyup', (event) => {
    delete inputs[event.key];
});

document.addEventListener("keydown", function(e) {
    console.log(e.key);
});