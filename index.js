let dodger = document.getElementById("dodger");
let dodgerWidth = dodger.scrollWidth;
let dodgerHeight = dodger.scrollHeight;
dodger.style.bottom = "180px"
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft(modInput) {
    if (modInput === undefined){
        modInput = 0;
    }

    let movementValue = 5 + modInput;
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    
    if (left > 0) {
        dodger.style.left = `${left - movementValue}px`
    }
}

function moveDodgerRight(modInput) {
    if (modInput === undefined){
        modInput = 0;
    }

    let movementValue = 5 + modInput;
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
    
    if (left < 400 - dodgerWidth) {
        dodger.style.left = `${left + movementValue}px`
    }
}

function moveDodgerDown(modInput) {
    if (modInput === undefined){
        modInput = 0;
    }

    let movementValue = 5 + modInput;
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
    
    if (bottom > 0) {
        dodger.style.bottom = `${bottom - movementValue}px`
    }
}

function moveDodgerUp(modInput) {
    if (modInput === undefined){
        modInput = 0;
    }

    let movementValue = 5 + modInput;
    let bottomNumbers = dodger.style.bottom.replace("px", "");
    let bottom = parseInt(bottomNumbers, 10);
    
    if (bottom < 400 - dodgerHeight) {
        dodger.style.bottom = `${bottom + movementValue}px`
    }
}

let keysPressed = {};

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        keysPressed[e.key] = true;
    }
    if (e.key === "ArrowRight") {
        keysPressed[e.key] = true;
    }
    if (e.key === "ArrowDown") {
        keysPressed[e.key] = true;
    }
    if (e.key === "ArrowUp") {
        keysPressed[e.key] = true;
    }
    if (e.key === "a"){
        keysPressed[e.key] = true;
    }

    dashValue = 20;

    if (keysPressed['ArrowLeft'] && !keysPressed['ArrowRight'] && !keysPressed['ArrowUp'] && !keysPressed['ArrowDown']){
        if (keysPressed['a']){
            moveDodgerLeft(dashValue);
        } else {
            moveDodgerLeft();
        }
    }
    
    if (!keysPressed['ArrowLeft'] && keysPressed['ArrowRight'] && !keysPressed['ArrowUp'] && !keysPressed['ArrowDown']){
        if (keysPressed['a']){
            moveDodgerRight(dashValue);
        } else {
            moveDodgerRight();
        }
    }

    if (!keysPressed['ArrowLeft'] && !keysPressed['ArrowRight'] && !keysPressed['ArrowUp'] && keysPressed['ArrowDown']){
        if (keysPressed['a']){
            moveDodgerDown(dashValue);
        } else {
            moveDodgerDown();
        }
    }

    if (!keysPressed['ArrowLeft'] && !keysPressed['ArrowRight'] && keysPressed['ArrowUp'] && !keysPressed['ArrowDown']){
        if (keysPressed['a']){
            moveDodgerUp(dashValue);
        } else {
            moveDodgerUp();
        }
    }

    if (keysPressed['ArrowLeft'] && keysPressed['ArrowUp']){
        if (keysPressed['a']){
            moveDodgerLeft(dashValue); moveDodgerUp(dashValue);
        } else {
            moveDodgerLeft(); moveDodgerUp();
        }
    }

    if (keysPressed['ArrowLeft'] && keysPressed['ArrowDown']){
        if (keysPressed['a']){
            moveDodgerLeft(dashValue); moveDodgerDown(dashValue);
        } else {
            moveDodgerLeft(); moveDodgerDown();
        }
    }

    if (keysPressed['ArrowRight'] && keysPressed['ArrowUp']){
        if (keysPressed['a']){
            moveDodgerRight(dashValue); moveDodgerUp(dashValue);
        } else {
            moveDodgerRight(); moveDodgerUp();
        }
    }

    if (keysPressed['ArrowRight'] && keysPressed['ArrowDown']){
        if (keysPressed['a']){
            moveDodgerRight(dashValue); moveDodgerDown(dashValue);
        } else {
            moveDodgerRight(); moveDodgerDown();
        }
    }

});

document.addEventListener('keyup', (event) => {
    delete keysPressed[event.key];
});

document.addEventListener("keydown", function(e) {
    console.log(e.key);
});