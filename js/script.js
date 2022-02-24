/*
-------------------------------------------------------
SELECTORS
-------------------------------------------------------
*/

// Create selectors for the grid & the button functionalities
const container = document.querySelector('#container');
const clearButton = document.querySelector('#clear');
const newGridButton = document.querySelector('#new-grid');
const inputGridSize = document.createElement('input');

/*
-------------------------------------------------------
GENERATE GRID
-------------------------------------------------------
*/

// Create a function to generate a dynamic grid
function generateGrid() {
  let i = 0;
  gridSize = inputGridSize.value ** 2;
  while (i < gridSize) {
    const square = document.createElement('div');
    container.style.gridTemplateColumns = `repeat(${inputGridSize.value}, 0fr)`;
    square.classList.add('square')
    container.appendChild(square);
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = "maroon";
    });

    clearGrid(square);
    i++;
  }
}

generateGrid();