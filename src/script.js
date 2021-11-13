resetGridCells();

document.querySelector('.reset').addEventListener('click', resetGridCells);

function setGridSize() {
    let gridSize = prompt("How big would you like the sides of the grid to be? (between 10 and 80)");
    gridSize = parseInt(gridSize);
    gridSize = Math.max(10, gridSize);
    gridSize = Math.min(80, gridSize);
    return gridSize;
}

function resetGridCells() {
    let gridContainer = document.querySelector(".grid-container");
    gridContainer.textContent = '';
    let gridSize = setGridSize();
    let gridAmount = gridSize * gridSize;

    for (i = 0; i < gridAmount; i++) {
        let div = document.createElement("div");
        gridContainer.appendChild(div);
    }

    gridCells = gridContainer.querySelectorAll("div");

    gridCells.forEach((div) => {div.style.backgroundColor = "rgb(255, 255, 255)"});

    gridCells.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            if (isMouseDown == true) {
                //e.target.style.backgroundColor = "black";
                //e.target.style.backgroundColor = randomRGBAColor();
                e.target.style.backgroundColor = darken(e.target.style.backgroundColor);
            }
        })
    });

    gridCells.forEach((div) => { div.style.width = `${(100 / gridSize)}%` })

    gridCells.forEach((div) => { div.style.height = `${(100 / gridSize)}%` })

}


let isMouseDown = false;
document.addEventListener("mousedown", () => {isMouseDown = true});
document.addEventListener("mouseup", () => {isMouseDown = false});

function randomRGBAColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let col = "rgb(" + r + "," + g + "," + b + ")";
    return col;
}

function darken(RGBcolor) {
    let rgbArray = RGBcolor.slice(4, -1).split(", ");
    let darkeningFactor = 50;
    r = parseInt(rgbArray[0]) - darkeningFactor;
    g = parseInt(rgbArray[1]) - darkeningFactor;
    b = parseInt(rgbArray[2]) - darkeningFactor;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}