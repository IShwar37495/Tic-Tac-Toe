
// function resetGameStatus(){
    // activePlayer=0;

  
   
    // if (gameDraw) {

    //     gameover.style.display="none";
    //     gameDraw.innerHTML= '<h2>You won! <span id="winner-name">Player name</span>!</h2>';
    // }

    
   
    // if (winnerName) {
    //     winnerName.textContent="";
    // }



    function resetGameStatus(){
        activePlayer = 0;
        winner = undefined; 
        gameIsFinished=false;
    
        
        gameover.style.display = "none";
        // gameDraw.style.display="none";
        // gameDraw.innerHTML='<h2 id="game-draw"> You won! <span id="winner-name">Player name</span>!</h2>';
    
        
            winnerName.textContent = ""; 

        
            gameDraw.textContent="";
           

        
        
            
        
    
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                gameData[i][j] = 5;
            }   
        }
    
       
        const gameFields = document.querySelectorAll("#game-board li");
        for (const field of gameFields) {
            field.textContent = "";
            field.classList.remove("disabled");
        }
    }




    

function startNewGame(){
    if(players[0].name==="" || players[1].name==="" ){
        alert("please set player name!");
        return;
    }

   


    if(gameIsFinished)
    {
        console.log(gameIsFinished);
        console.log(gameover);
       
    resetGameStatus();

    }

    
    activePlayerNameElement.textContent=players[activePlayer].name;
    gameAreaElement.style.display="block";

    

}




function switchPlayer(){
    if(activePlayer==0){
        activePlayer=1;
    }
    else{
        activePlayer=0;
    }
activePlayerNameElement.textContent=players[activePlayer].name;
}

function selectGameField(event){
    if(event.target.tagName!=="LI" || gameIsFinished)
    {
        return;
    }
    const selectedField=event.target;
    const selectedColumn=selectedField.dataset.col-1;//// we will not convert it into number because by performing a mathematical calculation(e.g->minus) will automatically change it into number;
    const selectedRow=selectedField.dataset.row-1;

    if(gameData[selectedRow][selectedColumn] != 5){
        alert("please select an empty field");
        return;
    }


    
    event.target.textContent=players[activePlayer].symbol;
    event.target.classList.add("disabled");


    gameData[selectedRow][selectedColumn]=activePlayer
    if(checkRow(selectedRow) ||checkCol(selectedColumn)|| checkDiagonal() ){
        winner=activePlayer;
        gameIsFinished=true;/////---extra 
    }
    if(winner!=undefined){
        // console.log([activePlayer].name);
        // alert(`winner is ${players[activePlayer].symbol}`);
        gameDraw.textContent="You won!!";
        winnerName.textContent= players[activePlayer].name;
        gameover.style.display="block";
       
        // console.log(players[activePlayer].name);
        
       
        gameIsFinished=true;

    }
    else if (checkDraw()) { 
        gameover.style.display="block";
        gameDraw.textContent="it's a draw!!!";
        winnerName.textContent= "";

        gameIsFinished=true;
    } else {
        switchPlayer();
    }
}
    
    


    


function checkRow(row){
   for(let i=0;i<gameData[row].length;i++){
       if(gameData[row][i]!=activePlayer){
           return false;
       }
   }
   return true;
}

function checkCol(col){
    for(let i=0;i<gameData.length;i++){
        for(let j=0;j<gameData[i].length;j++){
            if(j==col){
                if(gameData[i][j]!=activePlayer) return false;
            }
        }
    }
    return true;
}


function checkDiagonal() {
   
    if (gameData[0][0] === activePlayer && gameData[1][1] === activePlayer && gameData[2][2] === activePlayer) {
        return true;
    }
   
    if (gameData[0][2] === activePlayer && gameData[1][1] === activePlayer && gameData[2][0] === activePlayer) {
        return true;
    }
    return false;
}



function checkDraw(){
    for(let i=0;i<gameData.length;i++)
    {
        for(let j=0;j<gameData[i].length;j++)
        {
            if(gameData[i][j]==5){
                return false;
            }
        }
    }
    return true;
}

