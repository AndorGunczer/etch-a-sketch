const container = document.getElementsByClassName('container')[0];

for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        const draw_grid = document.createElement('div');
        draw_grid.setAttribute('class', 'draw_grid');
        container.appendChild(draw_grid);
    }
    
}

const grid = document.querySelectorAll('.draw_grid');

grid.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.setAttribute('style', 'background-color: red;');
    });
});