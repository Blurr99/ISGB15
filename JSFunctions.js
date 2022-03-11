"use strict";

/**
 * Globalt objekt som innehåller de attribut som ni skall använda.
 * Initieras genom anrop till funktionern initGlobalObject().
 */
let oGameData = {};

/**
 * Initerar det globala objektet med de attribut som ni skall använda er av.
 * Funktionen tar inte emot några värden.
 * Funktionen returnerar inte något värde.
 */
oGameData.initGlobalObject = function() {

    //Datastruktur för vilka platser som är lediga respektive har brickor
    //oGameData.gameField = Array('', '', '', '', '', '', '', '', '');
    
    /* Testdata för att testa rättningslösning */
    oGameData.gameField = Array('X', 'X', 'X', '', '', '', '', '', '');
    //oGameData.gameField = Array('X', '', '', 'X', '', '', 'X', '', '');
    //oGameData.gameField = Array('X', '', '', '', 'X', '', '', '', 'X');
    //oGameData.gameField = Array('', '', 'X', '', 'X', '', 'X', '', '');
    //oGameData.gameField = Array('X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O');

    //Indikerar tecknet som skall användas för spelare ett.
    oGameData.playerOne = "X";

    //Indikerar tecknet som skall användas för spelare två.
    oGameData.playerTwo = "O";

    //Kan anta värdet X eller O och indikerar vilken spelare som för tillfället skall lägga sin "bricka".
    oGameData.currentPlayer = "";

    //Nickname för spelare ett som tilldelas från ett formulärelement,
    oGameData.nickNamePlayerOne = "";

    //Nickname för spelare två som tilldelas från ett formulärelement.
    oGameData.nickNamePlayerTwo = "";

    //Färg för spelare ett som tilldelas från ett formulärelement.
    oGameData.colorPlayerOne = "";

    //Färg för spelare två som tilldelas från ett formulärelement.
    oGameData.colorPlayerTwo = "";

    //"Flagga" som indikerar om användaren klickat för checkboken.
    oGameData.timerEnabled = false;

    //Timerid om användaren har klickat för checkboxen. 
    oGameData.timerId = null;

}
//Kollar om någon spelare har vunnit horisontellt
function checkHorizontal() {
    console.log(oGameData.gameField);
    if((oGameData.gameField[0] === "X") && (oGameData.gameField[1] === "X") && (oGameData.gameField[2] === "X") 
    || (oGameData.gameField[3] === "X") && (oGameData.gameField[4] === "X") && (oGameData.gameField[5] === "X") 
    || (oGameData.gameField[6] === "X") && (oGameData.gameField[7] === "X") && (oGameData.gameField[8] === "X") ){
        return 1;
    }

    else if((oGameData.gameField[0] === "O") && (oGameData.gameField[1] === "O") && (oGameData.gameField[2] === "O")
    || (oGameData.gameField[3] === "O") && (oGameData.gameField[4] === "O") && (oGameData.gameField[5] === "O")
    || (oGameData.gameField[6] === "O") && (oGameData.gameField[7] === "O") && (oGameData.gameField[8] === "O") ) {
        return 2;
    }
 
}
//Kollar om någon spelare har vunnit vertikalt
function checkVertical() {
    if((oGameData.gameField[0] === "X") && (oGameData.gameField[3] === "X") && (oGameData.gameField[6] === "X") 
    || (oGameData.gameField[1] === "X") && (oGameData.gameField[4] === "X") && (oGameData.gameField[7] === "X") 
    || (oGameData.gameField[2] === "X") && (oGameData.gameField[5] === "X") && (oGameData.gameField[8] === "X") ){
        return 1;
    }

    else if((oGameData.gameField[0] === "O") && (oGameData.gameField[3] === "O") && (oGameData.gameField[6] === "O")
    || (oGameData.gameField[1] === "O") && (oGameData.gameField[4] === "O") && (oGameData.gameField[7] === "O")
    || (oGameData.gameField[2] === "O") && (oGameData.gameField[5] === "O") && (oGameData.gameField[8] === "O") ) {
        return 2;
    }
}
//Kollar om någon spelare har vunnit diagonalt
function checkDiagonal() {
    if((oGameData.gameField[6] === "X") && (oGameData.gameField[4] === "X") && (oGameData.gameField[2] === "X") 
    || (oGameData.gameField[0] === "X") && (oGameData.gameField[4] === "X") && (oGameData.gameField[8] === "X") ){
        return 1;
    }

    else if((oGameData.gameField[2] === "O") && (oGameData.gameField[4] === "O") && (oGameData.gameField[6] === "O")
    || (oGameData.gameField[8] === "O") && (oGameData.gameField[4] === "O") && (oGameData.gameField[0] === "O") ) {
        return 2;
    }
}

//kollar om det finns tomma fält kvar annars so är det oavgjort
function oavgjort() {
    let svar = 3; 

    for (let i=0; i< oGameData.gameField.length; i++){
        if (oGameData.gameField[i] == ''){
            svar = 0;
        }   
    }
    return svar;
}

/*
 * Kontrollerar för tre i rad.
 * Returnerar 0 om det inte är någon vinnare, 
 * returnerar 1 om spelaren med ett kryss (X) är vinnare,
 * returnerar 2 om spelaren med en cirkel (O) är vinnare eller
 * returnerar 3 om det är oavgjort.
 * Funktionen tar inte emot några värden.
 */
        

// Funktion som returnerar olika värden, beroende på hur spelet slutar
oGameData.checkForGameOver = function() {
    // kallar på check-funktioner och returnerar värde beroende på resulatat
    var horz = checkHorizontal();
    var vert = checkVertical();
    var dia = checkDiagonal();
    
    if((horz === 1 ) || (vert === 1) || (dia === 1)) {
        console.log("Spelare ett har vunnit");
        return 1;
    }
    else if((horz === 2) || (vert === 2) || (dia === 2)) {
        console.log("Spelare två har vunnit");
        return 2;
    }
    
    else { // Kontrollerar spelets slut ifall det inte finns någon vinnare
        var oav = oavgjort();
        if (oav === 0){
            console.log("Det finns ingen vinnare");
            return 0;
        }
        else{
            console.log("Spelet är oavgjort");
            return 3;
        }
        
    }
}

//Uppgift 2
//Golbala varibler
var gameAreaEle; //Element för gameArea

function init(){
    //Anropa funktionen ” initGlobalObject” i oGameData
    oGameData.initGlobalObject();
    //Lägg till klassen d-none på elementet med id gameArea
    gameAreaEle = document.getElementById('gameArea');
    gameAreaEle.classList.add("d-none");
    //Lägg en lyssnare på ”Starta spelet!”-knappen som lyssnar efter klick-händelsen.
    const element = document.getElementById("newGame");
    element.addEventListener("click", listenerNewGame);
    //När knappen klickas skall funktionen validatForm anropas.
    function listenerNewGame() {
        console.log("hej");
        validateForm();
    }
}
window.onload = init;

//validateForm
function validateForm(){
    try {
        console.log("try"); 
        var limit = 5;
        var nick1 = document.getElementById('nick1');
        if(nick1.value.length < limit) {
            throw new Error("Användarnamnet måste vara minst 5 tecken långt");
        }
        
        var nick2 = document.getElementById('nick2');
        if(nick2.value.length < limit) {
            throw new Error("Användarnamnet måste vara minst 5 tecken långt");
        }
        
        if(nick1.value == nick2.value){
            throw new Error("Användernamnen för spelare 1 och spelare 2 får inte vara samma")
        }

        var color1 = document.getElementById('color1');
        if((color1.value == "#000000") ||(color1.value == "#ffffff")){
            throw new Error("färgen får inte vara svart eller vit");
        }
        
        var color2 = document.getElementById('color2');
        if((color2.value == "#000000") ||(color2.value == "#ffffff")) {
            throw new Error("färgen får inte vara svart eller vit");
        }

        if(color1.value == color2.value){
            throw new Error("Färgerna är samma för båda spelare");
        }
     
    }
    catch(oError){
    errorMsg = document.getElementById("errorMsg");
    console.log( oError.message );
errorMsg 
    }
    
}
/*
function checkForm() {
    console.log("checkForm()");

    try {

        let textRefs = document.querySelectorAll('input[type=text], textarea');
        console.log(textRefs);

        let currentTextRef = null;

        for(let i = 0; i < textRefs.length; i++) {
            currentTextRef = textRefs.item(i);

            console.log( currentTextRef );

            if(currentTextRef.value.length === 0) {
                throw { elementRef : currentTextRef };
            }

        }

        return true;

    } catch(oError) {
        document.querySelector('#errorMsg').textContent = 'Ange ' + oError.elementRef.getAttribute('title') + '!';
        oError.elementRef.focus();
        return false;
    }*/