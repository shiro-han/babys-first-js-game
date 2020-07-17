let inputs = {};
let controls = {
    left: 'ArrowLeft',
    right: 'ArrowRight',
    down: 'ArrowDown',
    up: 'ArrowUp',
    run: 'a'
};
let gameStarted = false;

const gameWindow = document.getElementById('game');

let gameWindowWidth = gameWindow.scrollWidth;
let gameWindowHeight = gameWindow.scrollHeight;

let dodger = document.getElementById("dodger");
let dodgerWidth = dodger.scrollWidth;
let dodgerHeight = dodger.scrollHeight;

dodger.style.left = gameWindowWidth/2 - dodgerWidth/2 + "px";
dodger.style.bottom = gameWindowWidth/2 - dodgerHeight/2 + "px";
dodger.style.backgroundColor = "#FF7F50";

function moveDodger(direction, run=false){
    let movementValue; let leftNumbers; let left; let bottomNumbers; let bottom;
    if (run === false) {movementValue = 5}
    else {movementValue = 10;}
    

    switch (direction) {
        case 'left':
            leftNumbers = dodger.style.left.replace("px", "");
            left = parseInt(leftNumbers, 10);
    
            if (left > 0) {dodger.style.left = `${left - movementValue}px`}
            break;

        case 'right':
            leftNumbers = dodger.style.left.replace("px", "");
            left = parseInt(leftNumbers, 10);
            
            if (left < gameWindowWidth - dodgerWidth) {dodger.style.left = `${left + movementValue}px`}
            break;

        case 'up':
            bottomNumbers = dodger.style.bottom.replace("px", "");
            bottom = parseInt(bottomNumbers, 10);
            
            if (bottom < gameWindowHeight - dodgerHeight) {dodger.style.bottom = `${bottom + movementValue}px`}
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

let pauseGame = () => {
    gameWindow.style.backgroundColor = 'blue';
    dodger.style.backgroundColor = 'blue';
    let pauseText = document.createElement('h1')
    pauseText.innerText = 'PAUSED -- CLICK TO RESUME'
    gameWindow.appendChild(pauseText);
}

let resumeGame = () => {
    gameWindow.style.backgroundColor = '#111';
    dodger.style.backgroundColor = "#FF7F50";
    let pauseText = gameWindow.querySelector('h1')
    gameWindow.removeChild(pauseText)
}

document.addEventListener("click", function(e){
    if (e.target.matches('button')){
        selectedButton = e.target;
        control = selectedButton.parentNode.firstChild.innerText.toLowerCase();
        selectedButton.innerText = 'Rebinding Key...'
        selectedButton.addEventListener("keydown", function(e){
            e.preventDefault();
            controls[control] = e.key;
            selectedButton.innerText = e.key;
            if (e.keyCode === 32){selectedButton.innerText = "Spacebar"}
        })
        
    }
})

gameWindow.addEventListener("keydown", function(e) {
    e.preventDefault();

    controlsArray = Object.values(controls);
    controlsArray.forEach(control => {
        if (e.key === control) {inputs[e.key] = true;}
    })

    createMovement(inputs)
    
});

document.addEventListener('keyup', (e) => {
    delete inputs[e.key];
});

gameWindow.addEventListener('focusin', (e) => {
    resumeGame()
})

gameWindow.addEventListener('focusout', (e) => {
    pauseGame()
})


// gameWindow.addEventListener("keydown", function(e) {
//     console.log(e.key);
// });