const container = document.getElementsByClassName('container')[0];
const slider = document.getElementById("my_range");
let slider_value = slider.value;
let square_per_row = slider_value / 2;
let square_per_column = square_per_row;
let square_size = 32 / square_per_row;

for (let i = 0; i < square_per_column; i++) {
    for (let j = 0; j < square_per_row; j++) {
        const draw_grid = document.createElement('div');
        draw_grid.setAttribute('class', 'draw_grid');
        draw_grid.setAttribute('style', `height: ${square_size}em; width: ${square_size}em;`);
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
};

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
    });
};
