let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
const choices = [rock, paper, scissors];

function disableEvent() {
  rock.removeEventListener("click", rockPick);
  paper.removeEventListener("click", paperPick);
  scissors.removeEventListener("click", scissorsPick);
}

rock.addEventListener("click", rockPick);
paper.addEventListener("click", paperPick);
scissors.addEventListener("click", scissorsPick);

//Rock Pick Function

function rockPick() {
  let randomChoice = Math.floor(Math.random() * choices.length);

  document.getElementById("left-pic").style.animation = "shoot 2s";
  document.getElementById("right-pic").style.animation = "shoot 2s";

  setTimeout(() => {
    let leftPic = (document.getElementById("left-pic").src = "rock.png");
  }, 2000);

  setTimeout(() => {
    switch (randomChoice) {
      case 0:
        document.getElementById("right-pic").src = "rock.png";
        document.getElementById("winner").innerHTML = "It's a Tie!";
        break;
      case 1:
        document.getElementById("right-pic").src = "paper.png";
        document.getElementById("winner").innerHTML = "Paper Wins!";
        break;
      case 2:
        document.getElementById("right-pic").src = "scissors.png";
        document.getElementById("winner").innerHTML = "Rock Wins!";
        break;
    }
  }, 2000);

  setTimeout(() => {
    document.getElementById("left-pic").style.removeProperty("animation");
    document.getElementById("right-pic").style.removeProperty("animation");
  }, 2000);

  setTimeout(() => {
    document.getElementById("left-pic").src = "rock.png";
    document.getElementById("right-pic").src = "rock.png";
    document.getElementById("winner").innerHTML = "Rock Paper Scissors!";
  }, 4000);

  disableEvent();

  setTimeout(() => {
    rock.addEventListener("click", rockPick);
    paper.addEventListener("click", paperPick);
    scissors.addEventListener("click", scissorsPick);
  }, 4000);
}

//Paper Pick Function

function paperPick() {
  let randomChoice = Math.floor(Math.random() * choices.length);

  document.getElementById("left-pic").style.animation = "shoot 2s";
  document.getElementById("right-pic").style.animation = "shoot 2s";

  setTimeout(() => {
    let leftPic = (document.getElementById("left-pic").src = "paper.png");
  }, 2000);

  setTimeout(() => {
    switch (randomChoice) {
      case 0:
        document.getElementById("right-pic").src = "rock.png";
        document.getElementById("winner").innerHTML = "Paper Wins!";
        break;
      case 1:
        document.getElementById("right-pic").src = "paper.png";
        document.getElementById("winner").innerHTML = "It's a Tie!";
        break;
      case 2:
        document.getElementById("right-pic").src = "scissors.png";
        document.getElementById("winner").innerHTML = "Scissors Win!";
        break;
    }
  }, 2000);

  setTimeout(() => {
    document.getElementById("left-pic").style.removeProperty("animation");
    document.getElementById("right-pic").style.removeProperty("animation");
  }, 2000);

  setTimeout(() => {
    document.getElementById("left-pic").src = "rock.png";
    document.getElementById("right-pic").src = "rock.png";
    document.getElementById("winner").innerHTML = "Rock Paper Scissors!";
  }, 4000);

  disableEvent();

  setTimeout(() => {
    rock.addEventListener("click", rockPick);
    paper.addEventListener("click", paperPick);
    scissors.addEventListener("click", scissorsPick);
  }, 4000);
}

//Scissors Pick Function

function scissorsPick() {
  let randomChoice = Math.floor(Math.random() * choices.length);

  document.getElementById("left-pic").style.animation = "shoot 2s";
  document.getElementById("right-pic").style.animation = "shoot 2s";

  setTimeout(() => {
    let leftPic = (document.getElementById("left-pic").src = "scissors.png");
  }, 2000);

  setTimeout(() => {
    switch (randomChoice) {
      case 0:
        document.getElementById("right-pic").src = "rock.png";
        document.getElementById("winner").innerHTML = "Rock Wins";
        break;
      case 1:
        document.getElementById("right-pic").src = "paper.png";
        document.getElementById("winner").innerHTML = "Scissors Win";
        break;
      case 2:
        document.getElementById("right-pic").src = "scissors.png";
        document.getElementById("winner").innerHTML = "It's a Tie!";
        break;
    }
  }, 2000);

  setTimeout(() => {
    document.getElementById("left-pic").style.removeProperty("animation");
    document.getElementById("right-pic").style.removeProperty("animation");
  }, 2000);

  setTimeout(() => {
    document.getElementById("left-pic").src = "rock.png";
    document.getElementById("right-pic").src = "rock.png";
    document.getElementById("winner").innerHTML = "Rock Paper Scissors!";
  }, 4000);

  disableEvent();

  setTimeout(() => {
    rock.addEventListener("click", rockPick);
    paper.addEventListener("click", paperPick);
    scissors.addEventListener("click", scissorsPick);
  }, 4000);
}
