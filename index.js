const container = document.getElementsByClassName('container')[0];
const slider = document.getElementById("my_range");
let slider_value = slider.value;
let square_per_row = slider_value / 2;
let square_per_column = square_per_row;
let square_size = 32 / square_per_row;

create_grid();

slider.onchange = () => {

    const draw_grid = Array.from(document.getElementsByClassName('draw_grid'));
    let x = 0;
    slider_value = slider.value;
    square_per_row = slider_value / 2;
    square_per_column = square_per_row;
    square_size = 32 / square_per_row;

    // console.log(slider.value);
    // console.log(square_per_column);
    // console.log(square_size);
    // console.log(draw_grid);
    
    remove_grid(draw_grid);
    create_grid();
};

/*
    Functions to switch between different grid modes
*/

const eraser = document.getElementById('eraser');
const color = document.getElementById('color');

eraser.addEventListener('click', erase_mode);
color.addEventListener('click', draw_mode);

function colorFunction() {
    console.log("drawer called");
    this.setAttribute('style', `height: ${square_size}em; width: ${square_size}em; background-color: red;`);
};

function eraseFunction() {
    console.log("eraser called");
    this.setAttribute('style', `height: ${square_size}em; width: ${square_size}em; background-color: white;`);
};

function draw_mode() {
    const grid = document.querySelectorAll('.draw_grid');

    grid.forEach(element => {
        element.removeEventListener('mouseover', eraseFunction);
        element.addEventListener('mouseover', colorFunction);
    });
};

function erase_mode() {
    const grid = document.querySelectorAll('.draw_grid');

    grid.forEach(element => {
        element.removeEventListener("mouseover", colorFunction);
        element.addEventListener("mouseover", eraseFunction);
    });
};

/*
    Functions to work with the grid
*/

function create_grid() {
    for (let i = 0; i < square_per_column; i++) {
        for (let j = 0; j < square_per_row; j++) {

            draw_grid = document.createElement('div');
            draw_grid.setAttribute('class', 'draw_grid');
            draw_grid.setAttribute('style', `height: ${square_size}em; width: ${square_size}em;`);
            container.appendChild(draw_grid);
        };
    };
};

function remove_grid(grid_to_remove) {
    grid_to_remove.forEach(element => {
        element.remove();
    });
};