let inputs = {};
let controls = {
    left: 'ArrowLeft',
    right: 'ArrowRight',
    down: 'ArrowDown',
    up: 'ArrowUp',
    run: 'a'
};

const gameWindow = document.getElementById('game');
const title = document.createElement('h1'); title.textContent = "Shiro's First JS Game";
// const subtitle = document.createElement('h3'); subtitle.textContent = "by Shiro Han";
const header = document.createElement('h2'); header.textContent = "Controls";

const setTable = document.createElement('table');
const setTableR1 = document.createElement('tr'); setTable.appendChild(setTableR1);
const setTableH1 = document.createElement('th'); setTableH1.textContent = "Action"; setTableR1.appendChild(setTableH1);
const setTableH2 = document.createElement('th'); setTableH2.textContent = "Keybind"; setTableR1.appendChild(setTableH2);
const setTableR2 = document.createElement('tr'); setTable.appendChild(setTableR2);
const setTableLEFTtext = document.createElement('td'); setTableLEFTtext.textContent = "Left"; setTableR2.appendChild(setTableLEFTtext);
const setTableLEFTbutton = document.createElement('button'); setTableLEFTbutton.textContent = controls['left']; setTableR2.appendChild(setTableLEFTbutton);
const setTableR3 = document.createElement('tr'); setTable.appendChild(setTableR3);
const setTableRIGHTtext = document.createElement('td'); setTableRIGHTtext.textContent = "Right"; setTableR3.appendChild(setTableRIGHTtext);
const setTableRIGHTbutton = document.createElement('button'); setTableRIGHTbutton.textContent = controls['right']; setTableR3.appendChild(setTableRIGHTbutton);
const setTableR4 = document.createElement('tr'); setTable.appendChild(setTableR4);
const setTableUPtext = document.createElement('td'); setTableUPtext.textContent = "Up"; setTableR4.appendChild(setTableUPtext);
const setTableUPbutton = document.createElement('button'); setTableUPbutton.textContent = controls['up']; setTableR4.appendChild(setTableUPbutton);
const setTableR5 = document.createElement('tr'); setTable.appendChild(setTableR5);
const setTableDOWNtext = document.createElement('td'); setTableDOWNtext.textContent = "Down"; setTableR5.appendChild(setTableDOWNtext);
const setTableDOWNbutton = document.createElement('button'); setTableDOWNbutton.textContent = controls['down']; setTableR5.appendChild(setTableDOWNbutton);
const setTableR6 = document.createElement('tr'); setTable.appendChild(setTableR6);
const setTableRUNtext = document.createElement('td'); setTableRUNtext.textContent = "Run"; setTableR6.appendChild(setTableRUNtext);
const setTableRUNbutton = document.createElement('button'); setTableRUNbutton.textContent = controls['run']; setTableR6.appendChild(setTableRUNbutton);

gameWindow.insertAdjacentElement('beforebegin', title);
gameWindow.insertAdjacentElement('afterend', header);
header.insertAdjacentElement('afterend', setTable);

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
    e.preventDefault();

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