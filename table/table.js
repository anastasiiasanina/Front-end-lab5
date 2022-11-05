const rows = 6;
const cols = 6;
const variant = 4;

let table = document.getElementById('table');
let innerCounter = 1;

const findRandomColour = () => {
  const letters ="0123456789ABCDEF";
  let color = '';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return `#${color}`;
};

const changeColour = (el, backCol, textCol) => {
  el.style.backgroundColor = backCol;
  el.style.color = textCol;
};

for(let i = 0; i < rows; i++) {
  let row = document.createElement("tr");
  table.append(row);
  for(let j = 0; j < cols; j++) {
    let col = document.createElement("td");
    col.innerText = innerCounter;
    row.append(col);
    if(innerCounter == variant) col.classList.add("select-cell");
    innerCounter++;
  }
}
let selected = document.querySelector('.select-cell');

selected.addEventListener('mouseover', (e) => {
  changeColour(selected, findRandomColour(), findRandomColour());
})

selected.addEventListener('click', (e) => {
  let chosenColor = document.querySelector('.color').value;
  selected.style.backgroundColor = chosenColor;
})

selected.addEventListener('dblclick', (e) => {
  let chosenColor = document.querySelector('.color').value;
  for(let i = 0; i < table.rows.length; i++) {
    table.rows[i].cells[table.rows.length - 1 - i].style.backgroundColor = chosenColor;
  }
});