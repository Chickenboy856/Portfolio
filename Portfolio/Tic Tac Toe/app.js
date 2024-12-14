const board = document.getElementById("board");
const boxes = document.getElementsByClassName("box");
const gridArea = document.querySelectorAll(".grid");
const players = ["X", "O"];
const text = document.getElementById("text");
let currentPlayer = players[0];
let isGameEnabled = true;
let gameBoard = ["", "", "", "", "", "", "", "", ""];

const gameWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

gameClick();

function gameClick() {
  if (!isGameEnabled) return;
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", (event) => {
      if (!isGameEnabled) return;
      let gridValue = document.getElementById(`grid` + i);
      if (gameBoard[i] == "") {
        gameBoard.splice(i, 1, currentPlayer);
      } else {
        return;
      }
      if (currentPlayer == players[0]) {
        currentPlayer = players[1];
        gridValue.classList.add("x");
        text.textContent = `O's Turn`;
      } else {
        currentPlayer = players[0];
        gridValue.classList.add("circle");
        text.textContent = `X's Turn`;
      }
      if (!checkWin()) {
        checkTie();
      }
      if (!gameBoard.includes("") && gridValue.classList.contains("x")) {
        resetGame();
      }
    });
  }
}

function checkWin() {
  for (let i = 0; i < gameWin.length; i++) {
    const [a, b, c] = gameWin[i];
    if (
      gameBoard[a] === gameBoard[b] &&
      gameBoard[b] === gameBoard[c] &&
      gameBoard[a] !== ""
    ) {
      text.textContent = `${gameBoard[a]} Wins!`;
      animationExecute();
      resetGame();
      return true;
    }
  }
  return false;
}

function checkTie() {
  if (!gameBoard.includes("") && !checkWin()) {
    scoreTie();
    animationTie();
    resetGame();
    text.textContent = `It's a Tie!`;
  }
}

function resetGame() {
  isGameEnabled = false;
  setTimeout(() => {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    for (let i = 0; i < boxes.length; i++) {
      let gridValue = document.getElementById(`grid` + i);
      gridValue.classList.remove("x", "circle");
      currentPlayer = players[0];
      text.textContent = `X's Turn`;
      isGameEnabled = true;
    }
  }, 3000);
}

function animationExecute() {
  if (gameBoard.includes("") && currentPlayer == players[0]) {
    scoreO();
    animationO();
  } else {
    scoreX();
    animationX();
  }
}

function scoreX() {
  let xscore = document.getElementById("xscore").textContent;
  let numberX = parseInt(xscore);
  numberX += 1;
  document.getElementById("xscore").textContent = numberX;
}

function scoreO() {
  let oscore = document.getElementById("oscore").textContent;
  let numberO = parseInt(oscore);
  numberO += 1;
  document.getElementById("oscore").textContent = numberO;
}

function scoreTie() {
  let tieScore = document.getElementById("tiescore").textContent;
  let numberTie = parseInt(tieScore);
  numberTie += 1;
  document.getElementById("tiescore").textContent = numberTie;
}

function animationX() {
  for (let i = 0; i < boxes.length; i++) {
    let gridValue = document.getElementById(`grid` + i);
    gridValue.classList.remove("x", "circle");
    setTimeout(() => {
      gridValue.classList.add("x");
    }, 0);
    setTimeout(() => {
      gridValue.classList.remove("x");
    }, 500);
    setTimeout(() => {
      gridValue.classList.add("x");
    }, 1000);
    setTimeout(() => {
      gridValue.classList.remove("x");
    }, 1500);
    setTimeout(() => {
      gridValue.classList.add("x");
    }, 2000);
    setTimeout(() => {
      gridValue.classList.remove("x");
    }, 2500);
  }
}

function animationO() {
  for (let i = 0; i < boxes.length; i++) {
    let gridValue = document.getElementById(`grid` + i);
    gridValue.classList.remove("x", "circle");
    setTimeout(() => {
      gridValue.classList.add("circle");
    }, 0);
    setTimeout(() => {
      gridValue.classList.remove("circle");
    }, 500);
    setTimeout(() => {
      gridValue.classList.add("circle");
    }, 1000);
    setTimeout(() => {
      gridValue.classList.remove("circle");
    }, 1500);
    setTimeout(() => {
      gridValue.classList.add("circle");
    }, 2000);
    setTimeout(() => {
      gridValue.classList.remove("circle");
    }, 2500);
  }
}

function animationTie() {
  for (let i = 0; i < boxes.length; i++) {
    let gridValue = document.getElementById(`grid` + i);
    gridValue.classList.remove("x", "circle");
    setTimeout(() => {
      gridValue.classList.add("x");
    }, 0);
    setTimeout(() => {
      gridValue.classList.remove("x");
    }, 500);
    setTimeout(() => {
      gridValue.classList.add("circle");
    }, 1000);
    setTimeout(() => {
      gridValue.classList.remove("circle");
    }, 1500);
    setTimeout(() => {
      gridValue.classList.add("x");
    }, 2000);
    setTimeout(() => {
      gridValue.classList.remove("x");
    }, 2500);
  }
}
