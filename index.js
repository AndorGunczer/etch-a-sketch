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

eraser.addEventListener('click', draw.bind(null, "white"));
color.addEventListener('click', draw.bind(null, "red"));

function colorFunctionCaller() {
    // colorFunction()
}

function colorFunction(element, color) {
    console.log(element);
    element.setAttribute('style', "background-color: " + color + ";");
};

function draw(color) {
    grid.forEach(element => {
        element.removeEventListener('mouseover', colorFunction.bind(null, element, color));
        element.addEventListener('mouseover', colorFunction.bind(null, element, color));
    });
};

// function draw(color) {
//     grid.forEach(element => {
//         element.addEventListener('mouseover', () => {
//             element.setAttribute('style', "background-color: red;");
//         });
//     });
// };