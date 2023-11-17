const container = document.getElementsByClassName('container')[0];

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        const draw_grid = document.createElement('div');
        draw_grid.setAttribute('class', 'draw_grid');
        container.appendChild(draw_grid);
    };
};

const grid = document.querySelectorAll('.draw_grid');
const eraser = document.getElementById('eraser');
const color = document.getElementById('color');

eraser.addEventListener('click', erase);
color.addEventListener('click', draw);

function colorFunction() {
    console.log("drawer called");
    this.setAttribute('style', "background-color: " + "red" + ";");
};

function eraseFunction() {
    console.log("eraser called");
    this.setAttribute('style', "background-color: " + "white" + ";");
}

function draw() {
    grid.forEach(element => {
        element.removeEventListener('mouseover', eraseFunction);
        element.addEventListener('mouseover', colorFunction);
    });
};

function erase() {
    grid.forEach(element => {
        element.removeEventListener("mouseover", colorFunction);
        element.addEventListener("mouseover", eraseFunction);
    })
}
