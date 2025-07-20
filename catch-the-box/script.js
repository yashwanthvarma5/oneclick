
let score = 0;
let speed = 1000;

function catchBox() {
  score++;
  document.getElementById("score").innerText = score;

  // Move box to random position
  const box = document.getElementById("box");
  const area = document.getElementById("game-area");

  const maxX = area.clientWidth - box.clientWidth;
  const maxY = area.clientHeight - box.clientHeight;

  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  box.style.left = newX + "px";
  box.style.top = newY + "px";

  // Increase speed every 5 points
  if (score % 5 === 0 && speed > 300) {
    speed -= 100;
    clearInterval(moveInterval);
    moveInterval = setInterval(autoMoveBox, speed);
  }
}

function autoMoveBox() {
  catchBox();
}

// Start automatic movement
let moveInterval = setInterval(autoMoveBox, speed);
