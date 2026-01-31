const mario = document.getElementById('mario');
mario.style.display = 'block';  // Now it’s visible

let x = 100;
let y = 100;
let dx = 0.5; // speed in x
let dy = 0.5; // speed in y

function moveMario() {
    // move Mario
    x += dx;
    y += dy;

    // bounce off edges
    if (x < 0 || x > window.innerWidth - mario.width) dx = -dx;
    if (y < 0 || y > window.innerHeight - mario.height) dy = -dy;

    mario.style.left = x + 'px';
    mario.style.top = y + 'px';

    requestAnimationFrame(moveMario);
}

// start moving
moveMario();