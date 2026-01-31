const trailLength = 10; // number of dots in the trail
const trailDots = [];

// create the trail dots
for (let i = 0; i < trailLength; i++) {
  const dot = document.createElement("div");
  dot.classList.add("cursor-trail");
  dot.style.opacity = 1 - i / trailLength; // fade out
  document.body.appendChild(dot);
  trailDots.push({ el: dot, x: 0, y: 0 });
}

let mouseX = 0, mouseY = 0;

// track mouse
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// animation loop
function animate() {
  let x = mouseX;
  let y = mouseY;

  trailDots.forEach((dot, index) => {
    // lerp: each dot follows the previous position
    dot.x += (x - dot.x) * 0.2;
    dot.y += (y - dot.y) * 0.2;

    dot.el.style.left = dot.x + "px";
    dot.el.style.top = dot.y + "px";

    // next dot will follow this one
    x = dot.x;
    y = dot.y;
  });

  requestAnimationFrame(animate);
}

animate();
