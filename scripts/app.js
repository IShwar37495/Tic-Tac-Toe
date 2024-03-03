// let firstButton=document.getElementById("edit-player-1-btn");

// function setPlayerName(){
//     let newViewPort=document.getElementById("config-overlay");
//     let hideMain=document.getElementById("backdrop");
//     newViewPort.style.display="block";
//     hideMain.style.display="block";

//     let cancelButton=document.getElementById("cancel-button");

//     function removeBox(){
//         newViewPort.style.display="none";
//         hideMain.style.display="none";

//     }

//     cancelButton.addEventListener("click",removeBox);



//     let confirmButton=document.getElementById("confirm-button");

//     function confirmPlayerName(){

//     let inputValue=document.getElementById("playername");

//     let playerName=document.getElementById("first-player-name");

//     playerName.textContent=inputValue.value;

//     newViewPort.style.display="none";
//         hideMain.style.display="none";
//     }

//     confirmButton.addEventListener("click",confirmPlayerName);
// }


// firstButton.addEventListener("click", setPlayerName);

const gameData=[
    [5,5,5],
    [5,5,5],
    [5,5,5],
];

let gameIsFinished=false;
let editedPlayer=0;
let activePlayer=0;
let winner;
const players=[
   {
    name:"",
    symbol:"X"
   },
   {
    name:"",
    symbol:"O"
   },
];

const playerConfigOverlayElement=document.getElementById("config-overlay");
const backdropElement=document.getElementById("backdrop");

const formElement=document.querySelector("form");
const errorsOutputElement=document.getElementById("config-errors");
const gameAreaElement=document.getElementById("active-game");

const gameDraw=document.getElementById("game-draw");

const winnerName=document.getElementById("winner-name");



const editPlayer1BtnElement=document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement=document.getElementById("edit-player-2-btn");
const cancelConfigBtnElement=document.getElementById("cancel-config-button");
const startNewGameBtnElement=document.getElementById("start-game-btn");
// const gameFieldElements=document.querySelectorAll("#game-board li");
const gameBoardElement=document.getElementById("game-board");
const activePlayerNameElement=document.getElementById("active-player-name");

const gameover=document.getElementById("game-over");



editPlayer1BtnElement.addEventListener("click",openPlayerConfig);
editPlayer2BtnElement.addEventListener("click",openPlayerConfig);

cancelConfigBtnElement.addEventListener("click",closePlayerConfig);
backdropElement.addEventListener("click",closePlayerConfig);


formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click",startNewGame);

// for(const gameFieldElement of gameFieldElements){
//       gameFieldElement.addEventListener("click",selectGameField)
// }


gameBoardElement.addEventListener("click",selectGameField);
