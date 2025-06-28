let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");
const userscorepara = document.querySelector("#you");
const compscorepara = document.querySelector("#comp");

const GenComp = () => {
  const options = ["rock", "paper", "scissors"];
  let randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  console.log("game draw");
  msg.innerText = "Game Draw!";
  msg.style.backgroundColor = "#081b31";
};

const ShowWinner = (UserWin, userChoice, compchoice) => {
  if (UserWin) {
    console.log("You Won");
    msg.innerText = `You win! Your ${userChoice} beats ${compchoice}`;
    msg.style.backgroundColor = "green";
    userscore++;
    userscorepara.innerText = userscore;
  } else {
    console.log("You Lost");
    msg.innerText = `You lost! ${compchoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compscore++;
    compscorepara.innerText = compscore;
  }
};

const playGame = (userChoice) => {
  console.log("userChoice is", userChoice);
  const compchoice = GenComp();
  console.log("ComputerChoice is", compchoice);

  if (userChoice === compchoice) {
    drawGame();
  } else {
    let UserWin = true;
    if (userChoice === "rock") {
      UserWin = compchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      UserWin = compchoice === "scissors" ? false : true;
    } else {
      UserWin = compchoice === "rock" ? false : true;
    }

    ShowWinner(UserWin, userChoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
