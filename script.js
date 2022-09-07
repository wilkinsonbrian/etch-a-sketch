const height = 800;
let numSquares = 16;

function clearGrid() {
    const rows = document.querySelectorAll('row');
    const box = document.querySelector('.grid');
    while (rows.firstChild) {
        rows.removeChild(rows.firstChild);
    }
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
}

function drawGrid() {
    const grid = document.querySelector('.grid');
    const side = Math.floor(height/numSquares);
    for (let j=0; j<numSquares; j++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let i=0; i<numSquares; i++) {
            const box = document.createElement('div');
            
            box.style.height = side + "px";
            box.style.width = side + "px";

            box.classList.add('box');
            row.appendChild(box);
        }
        grid.appendChild(row);
    }
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(square => square.addEventListener('mouseenter', hover));
}


function hover() {
    this.classList.add('colorBox');
}

function getNumBoxes() {
    let numBoxes = prompt("How many boxes per side (max 100)");
    clearGrid();
    numSquares = Math.abs(parseInt(numBoxes));
    if (numSquares > 100) numSquares = 100;
    drawGrid();
}

const butt = document.querySelector('button');
butt.addEventListener('click', getNumBoxes);

drawGrid();
