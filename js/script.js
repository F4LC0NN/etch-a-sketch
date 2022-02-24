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

function clearGrid(square) {
  clearButton.addEventListener('click', () => {
    square.style.backgroundColor = 'transparent';
  });
}

function newGrid() {
  container.textContent = "Choose between 1 & 16 (Press ENTER to generate)";
  container.appendChild(inputGridSize);
  container.id = "change-container";
  inputGridSize.id = "input-bar";
}

newGrid();

newGridButton.addEventListener('click', () => {
  newGrid();
});

inputGridSize.addEventListener('keyup', (event) => {
  if (event.key == 'Enter') {
    if (inputGridSize.value < 1 || inputGridSize.value > 16) {
      return;
    }

    gridSize = inputGridSize.value;
    container.removeChild(inputGridSize);
    container.textContent = undefined;
    container.id = 'container';
    generateGrid(gridSize);
  }
});
