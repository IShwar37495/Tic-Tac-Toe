function openPlayerConfig(event){
   editedPlayer = +event.target.dataset.playerid;//+"1"--> will be converted into numbers type 1.
  


    playerConfigOverlayElement.style.display="block";
    backdropElement.style.display="block";
}

function closePlayerConfig(){
    playerConfigOverlayElement.style.display="none";
    backdropElement.style.display="none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.innerHTML="";
    formElement.firstElementChild.lastElementChild.value="";

}


function savePlayerConfig(event){
event.preventDefault();
const formData = new FormData(event.target);
const enteredPlayerName = formData.get("playername").trim();/// trim->removes the white space from font and after

if(!enteredPlayerName){
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.innerHTML= "<strong>Abbey Salle!!</strong> senior developer ko chutiya bnata hai, chl achhe se naam daal";
    return;
}

const updatedPlayerDataElement=document.getElementById("player-" + editedPlayer + "-data");
updatedPlayerDataElement.children[1].textContent=enteredPlayerName;

// if(editedPlayer===1){
//     players[0].name=enteredPlayerName;
// }
// else{
//     players[1].name=enteredPlayerName;

// }


players[editedPlayer-1].name=enteredPlayerName;


closePlayerConfig();

}