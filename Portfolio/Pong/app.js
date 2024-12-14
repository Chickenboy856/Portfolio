const canvas = document.getElementById("pong");
const ctx = canvas.getContext("2d");

const paddleWidth = 10,
  paddleHeight = 40;
const ballRadius = 8;
const playerSpeed = 4.5;
const computerSpeed = 2.5;
const color = "#FFF";

const player = {
  x: 0,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  speed: playerSpeed,
  color: color,
  dy: 0,
};

const computer = {
  x: canvas.width - paddleWidth,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  speed: computerSpeed,
  color: color,
};

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: ballRadius,
  speedX: 5 * (Math.random() < 0.5 ? 1 : -1),
  speedY: 5 * (Math.random() < 0.5 ? 1 : -1),
  color: color,
};

let playerScore = 0;
let computerScore = 0;

function drawPaddle(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

function drawBall(x, y, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function drawScore() {
  ctx.fillStyle = color;
  ctx.font = "36px 'Roboto', sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(playerScore, canvas.width / 4, 50);
  ctx.fillText(computerScore, (3 * canvas.width) / 4, 50);
}

function drawBackground() {
  ctx.fillStyle = "#1e1e1e";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawBorders() {
  ctx.strokeStyle = color;
  ctx.lineWidth = 2;
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function update() {
  player.y += player.dy;

  if (ball.y < computer.y + computer.height / 2) {
    computer.y -= computer.speed;
  } else {
    computer.y += computer.speed;
  }

  ball.x += ball.speedX;
  ball.y += ball.speedY;

  if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
    ball.speedY = -ball.speedY;
  }

  if (
    ball.x - ball.radius < player.x + player.width &&
    ball.y > player.y &&
    ball.y < player.y + player.height
  ) {
    ball.speedX = -ball.speedX;
  }

  if (
    ball.x + ball.radius > computer.x &&
    ball.y > computer.y &&
    ball.y < computer.y + computer.height
  ) {
    ball.speedX = -ball.speedX;
  }

  if (ball.x - ball.radius < 0) {
    computerScore++;
    resetBall();
  }

  if (ball.x + ball.radius > canvas.width) {
    playerScore++;
    resetBall();
  }

  if (player.y < 0) player.y = 0;
  if (player.y + player.height > canvas.height)
    player.y = canvas.height - player.height;
  if (computer.y < 0) computer.y = 0;
  if (computer.y + computer.height > canvas.height)
    computer.y = canvas.height - computer.height;
}

function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.speedX = 5 * (Math.random() < 0.5 ? 1 : -1);
  ball.speedY = 5 * (Math.random() < 0.5 ? 1 : -1);
}

function controlPaddle(e) {
  if (e.keyCode === 38) {
    player.dy = -player.speed;
  } else if (e.keyCode === 40) {
    player.dy = player.speed;
  }
}

function stopPaddle(e) {
  if (e.keyCode === 38 || e.keyCode === 40) {
    player.dy = 0;
  }
}

document.addEventListener("keydown", controlPaddle);
document.addEventListener("keyup", stopPaddle);

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  update();
  drawPaddle(player.x, player.y, player.width, player.height, player.color);
  drawPaddle(
    computer.x,
    computer.y,
    computer.width,
    computer.height,
    computer.color
  );
  drawBall(ball.x, ball.y, ball.radius, ball.color);
  drawScore();
  drawBorders();
  requestAnimationFrame(gameLoop);
}

gameLoop();
