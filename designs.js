// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
// Your code goes here!
const showGrid= document.querySelector('#pixelCanvas');
const chooseColor = document.querySelector('#colorPicker');
const chooseHeight = document.querySelector('#inputHeight');
const chooseWidth = document.querySelector('#inputWidth');
const button = document.querySelector('#sumbitButton');

button.addEventListener('click', x => {
//prevent it from doing the default action
  x.preventDefault();
//clear
  showGrid.innerHTML = '';
//draw grid
  for(let k = 0; k < chooseHeight.value ; k++){
    const row = document.createElement("tr");
    for(let i = 0; i < chooseWidth.value; i++){
      var cell = document.createElement("td");
      row.appendChild(cell);
      showGrid.appendChild(row);
//color
      var coloring = cell.addEventListener('click', y => {
        y.target.style.backgroundColor = chooseColor.value;
      });
    };
  };
});
};
makeGrid()
