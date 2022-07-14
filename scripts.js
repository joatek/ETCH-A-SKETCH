function createGrid(size) {
    const board = document.querySelector('.board');
    let grids = board.querySelectorAll('div');
    grids.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let area = size * size
    for (let i = 0; i < area; i++) {
        const grid = document.createElement('div');
        grid.addEventListener('mouseover', colorGrid);
        grid.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', grid);
    }
}

createGrid(1);

function resizeBoard(input) {
    createGrid(input);
}



function openFormSize() {
    document.getElementById('formSize').style.display = 'flex';
}

function closeFormSize() {
    document.getElementById('formSize').style.display = 'none';
}

function openFormColor() {
    document.getElementById('formColor').style.display = 'flex';
}

function closeFormColor() {
    document.getElementById('formColor').style.display = 'none';
}

let buttonColor = document.getElementById('colorButton');
buttonColor.addEventListener('click', openFormColor);

function colorGrid() {
    let color = document.querySelector('#colorPicker').value;
    this.style.backgroundColor = color;
}


