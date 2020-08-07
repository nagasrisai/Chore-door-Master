let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");
let streakOfWinner = document.getElementById("streak");
let maxStreakOfPlayer = document.getElementById("max-streak");

var numClosedDoors = 3;
var doesNotClick;
var startAgainCondition;
var streak = 0;
var maxStreak = streak;

let botDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let closedDoorPath =
  "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";

var openDoor1;
var openDoor2;
var openDoor3;

let randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  }
  if (choreDoor === 2) {
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
};

randomChoreDoorGenerator();

function onclick1() {
  if (isClicked(doorImage1) && doesNotClick != 0) {
    doorImage1.src = openDoor1;
    losedGame(doorImage1);
  }
}

doorImage1.onclick = onclick1;

function onclick2() {
  if (isClicked(doorImage2) && doesNotClick != 0) {
    doorImage2.src = openDoor2;
    losedGame(doorImage2);
  }
}

doorImage2.onclick = onclick2;

function onclick3() {
  if (isClicked(doorImage3) && doesNotClick != 0) {
    doorImage3.src = openDoor3;
    losedGame(doorImage3);
  }
}

doorImage3.onclick = onclick3;

function isClicked(door) {
  if (door.src === closedDoorPath) {
    return true;
  } else {
    return false;
  }
}

function playDoor() {
  --numClosedDoors;
  if (numClosedDoors === 1) {
    gameWin();
  }
}
function maxStreakfunction() {
  if (streak > maxStreak) {
    maxStreak = streak;
    maxStreakOfPlayer.innerHTML = maxStreak;
  }
}
function gameWin() {
  startButton.innerHTML = "You Win! Play Again";
  streak++;
  streakOfWinner.innerHTML = streak;
  maxStreakfunction();
  afterWin();
}
function gameLose() {
  startButton.innerHTML = "You Lose! Play Again";
  streak = 0;
  streakOfWinner.innerHTML = streak;
  maxStreakfunction();
}
function losedGame(ifBot) {
  if (ifBot.src === botDoorPath) {
    gameLose();
    afterLose();
  } else {
    playDoor();
  }
}

function afterLose() {
  doesNotClick = 0;
  startAgainCondition = 1;
}

function afterWin() {
  doesNotClick = 0;
  startAgainCondition = 1;
}
function startAgain() {
  doesNotClick = 1;
  numClosedDoors = 3;
  startButton.innerHTML = "Good Luck!";
  if (startAgainCondition === 1) {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;

    randomChoreDoorGenerator();

    doorImage1.onclick = onclick1;

    doorImage2.onclick = onclick2;

    doorImage3.onclick = onclick3;
  }
}

startButton.onclick = startAgain;
