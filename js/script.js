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

// Call the function
generateGrid();

/*
-------------------------------------------------------
CLEAR CURRENT GRID
-------------------------------------------------------
*/

// Create a function to turn the square back to transparent
function clearGrid(square) {
  clearButton.addEventListener('click', () => {
    square.style.backgroundColor = 'transparent';
  });
}

/*
-------------------------------------------------------
TRIGGER THE DIALOG BOX
-------------------------------------------------------
*/

// Create a function to replace the current grid with a dialog box
function triggerDialogBox() {
  container.textContent = "Choose between 1 & 16 (Press ENTER to generate)";
  container.appendChild(inputGridSize);
  container.id = "change-container";
  inputGridSize.id = "input-bar";
}

// Call the function
triggerDialogBox();

// Create an event to trigger the dialog box when clicking on the 'generate new grid' button
newGridButton.addEventListener('click', () => {
  triggerDialogBox();
});

/*
-------------------------------------------------------
GENERATE A NEW GRID
-------------------------------------------------------
*/

// Create a function to generate a new grid from the input in the dialog box
function generateNewGrid(gridSize) {
  gridSize = inputGridSize.value;
  container.removeChild(inputGridSize);
  container.textContent = undefined;
  container.id = 'container';
  generateGrid(gridSize);
}

// Create an event to trigger the grid creation with the ENTER key
inputGridSize.addEventListener('keyup', (event) => {
  if (event.key == 'Enter') {
    if (inputGridSize.value < 1 || inputGridSize.value > 16) {
      return;
    }
    generateNewGrid(gridSize);
  }
});

/*
-------------------------------------------------------
ANIMATE BUTTONS
-------------------------------------------------------
*/

// Scale down the clear button
clearButton.addEventListener('mousedown', () => {
  clearButton.style.transform = 'scale(0.98)';
});

// Scale up the clear button
clearButton.addEventListener('mouseup', () => {
  clearButton.style.transform = 'scale(1)';
});

// Scale down the generate new grid button
newGridButton.addEventListener('mousedown', () => {
  newGridButton.style.transform = 'scale(0.98)';
});

// Scale up the generate new grid button
newGridButton.addEventListener('mouseup', () => {
  newGridButton.style.transform = 'scale(1)';
});
