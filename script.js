const height = window.innerHeight;
let numSquares = 16;
const side = Math.floor(height/numSquares);

const grid = document.querySelector('.grid');
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

function hover() {
    this.classList.add('colorBox');
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(square => square.addEventListener('mouseenter', hover));
