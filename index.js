const gameWindow = document.getElementById('game');

let dodger = document.getElementById("dodger");
let dodgerWidth = dodger.scrollWidth;
let dodgerHeight = dodger.scrollHeight;
dodger.style.bottom = "180px";
dodger.style.backgroundColor = "#FF69B4";

function moveDodger(direction, dash=false){
    let movementValue; let leftNumbers; let left; let bottomNumbers; let bottom;
    if (dash === false) {movementValue = 3}
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
    dash: 'a'
};

function createMovement(myHash) {
    let inputArray = Object.keys(myHash);
    inputArray.forEach(input => {
        if (input === controls['left']) {moveDodger('left')}
        if (input === controls['right']) {moveDodger('right')}
        if (input === controls['up']) {moveDodger('up')}
        if (input === controls['down']) {moveDodger('down')}
    })
}

document.addEventListener("keydown", function(e) {
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