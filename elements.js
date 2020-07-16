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