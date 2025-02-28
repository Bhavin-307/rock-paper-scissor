const handOptions = {
  rock: "/assets/Rock.png",
  paper: "/assets/Paper.png",
  scissor: "/assets/Scissors.png",
};

let SCORE = 0;

const pickUserHand = (hand) => {
  console.log(hand);

  let playground = document.querySelector(".playground");
  playground.style.display = "none";

  let contest = document.querySelector(".contest");
  contest.style.display = "flex";

  document.getElementById("userPickImage").src = handOptions[hand];

  let cpHand = pickComputerHand();
  referee(hand, cpHand);
};

const pickComputerHand = () => {
  let hands = ["rock", "paper", "scissor"];
  let cpHand = hands[Math.floor(Math.random() * 3)];

  document.getElementById("computerPickImage").src = handOptions[cpHand];

  return cpHand;
};

const referee = (userHand, cpHand) => {
  if (userHand == "paper" && cpHand == "scissor") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "paper" && cpHand == "rock") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "scissor") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
  if (userHand == "rock" && cpHand == "rock") {
    setDecision("It's a tie!");
  }
  if (userHand == "rock" && cpHand == "paper") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "scissor" && cpHand == "scissor") {
    setDecision("It's a tie!");
  }
  if (userHand == "scissor" && cpHand == "rock") {
    setDecision("YOU LOSE!");
  }
  if (userHand == "scissor" && cpHand == "paper") {
    setDecision("YOU WIN!");
    setScore(SCORE + 1);
  }
};

const restartGame = () => {
  let playground = document.querySelector(".playground");
  playground.style.display = "flex";

  let contest = document.querySelector(".contest");
  contest.style.display = "none";
};

const setDecision = (decision) => {
  document.querySelector(".decision h1").innerText = decision;
};

const setScore = (score) => {
  SCORE = score;
  document.querySelector(".score h1").innerText = score;
};
