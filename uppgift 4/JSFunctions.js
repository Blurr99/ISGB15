"use strict";

/**
 * Globalt objekt som innehåller de attribut som ni skall använda.
 * Initieras genom anrop till funktionern initGlobalObject().
 */
//globaler variabler
let oGameData = {};

/**
 * Initerar det globala objektet med de attribut som ni skall använda er av.
 * Funktionen tar inte emot några värden.
 * Funktionen returnerar inte något värde.
 */
oGameData.initGlobalObject = function() {

    //Datastruktur för vilka platser som är lediga respektive har brickor
    oGameData.gameField = Array('', '', '', '', '', '', '', '', '');
    
    /* Testdata för att testa rättningslösning */
    //oGameData.gameField = Array('X', 'X', 'X', '', '', '', '', '', '');
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
    // kallar på check-funktioner och returnerar värde beroende på resulat
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
//Golbala variabler
var gameAreaEle; //Element för gameArea

function init(){

    //skapa checkbox och label for timmer & adderarr dem till formen
    timer();
    //Anropa funktionen ” initGlobalObject” i oGameData
    oGameData.initGlobalObject();
    //Lägg till klassen d-none på elementet med id gameArea
    gameAreaEle = document.getElementById('gameArea');
    gameAreaEle.classList.add("d-none");
    //Lägg en lyssnare på ”Starta spelet!”-knappen som lyssnar efter klick-händelsen.
    const element = document.getElementById("newGame");
    element.addEventListener("click", listenerNewGame);
    //När knappen klickas skall funktionen validateForm anropas.
    function listenerNewGame() {

        validateForm();
        
    }
}
window.onload = init; // Lyssnare för load

//undantagshantering för spelarnas namn och färg
function validateForm(){

    try {
        var limit = 5;

        //kontrollera om användarnamnet är mindre än 5 tecken
        var nick1 = document.getElementById('nick1');
        if(nick1.value.length < limit) {
            throw new Error("Användarnamnet måste vara minst 5 tecken långt");
            
        }
        var nick2 = document.getElementById('nick2');
        if(nick2.value.length < limit) {
            throw new Error("Användarnamnet måste vara minst 5 tecken långt");
            
        }
        
        //kontrollera att spelarna inte har samma namn
        if(nick1.value == nick2.value){
            throw new Error("Användernamnen för spelare 1 och spelare 2 får inte vara samma");
            
        }

        //kontrollera att spelarens färg inte är svart eller vit
        var color1 = document.getElementById('color1');
        if((color1.value == "#000000") ||(color1.value == "#ffffff")){
            throw new Error("Färgen får inte vara svart eller vit");
            
        }
        var color2 = document.getElementById('color2');
        if((color2.value == "#000000") ||(color2.value == "#ffffff")) {
            throw new Error("Färgen får inte vara svart eller vit");
            
        }

        // kontrollera att spelarna inte har samma färg
        if(color1.value == color2.value){
            throw new Error("Färgerna är samma för båda spelare");
            
        }
        //kallar på initiateGame();
        initiateGame();
    }
    //skriver ut felmeddelanden och förhindrar att spelet startas
    catch(oError){
    document.getElementById("errorMsg").innerHTML = oError.message;
    }
    
}

//börjar spelet
function initiateGame(){
 
    //Addera klassen "d-none" till formen
    let form1 = document.getElementById("divInForm");
    form1.classList.add("d-none");

    // ta bort klassen "d-none" från gameAreaEle
    if (gameAreaEle.classList.contains("d-none")){
        gameAreaEle.classList.remove("d-none");
    }
    //Töma "errorMsg"
    document.getElementById("errorMsg").innerHTML = "";

    //Spara spelarnas namn och färg i oGameData
    oGameData.nickNamePlayerOne = nick1.value;
    oGameData.nickNamePlayerTwo = nick2.value;
    oGameData.colorPlayerOne = color1.value;
    oGameData.colorPlayerTwo = color2.value;
    
    //Töma fälter
    let tdElement = document.querySelectorAll("td");
    for(let i = 0; i < 9; i++){
        tdElement.item(i).textContent = "";
        tdElement.item(i).setAttribute('style', 'background-color: #ffffff');
    }
    
    // Lokala variabler för spelare, användarnamn och tal som slumpas
    var playerChar;
    var playerName;

    // Slumpar fram vilken spelare som ska göra första draget
    if((playerChar !== "X" ) && (playerChar !=="O")){
    var rand = Math.random(); //slumpar ett tal mellan 0 och 1
    if(rand < 0.5) {
        playerChar = oGameData.playerOne;
        playerName = oGameData.nickNamePlayerOne;
        oGameData.currentPlayer = oGameData.playerOne;
    }
    else{
        playerChar = oGameData.playerTwo;
        playerName=oGameData.nickNamePlayerTwo; 
        oGameData.currentPlayer=oGameData.playerTwo;
    }
    }
    
    // Skriver ut spelaren och dess användarnamn
   document.getElementsByTagName("h1")[0].innerHTML = "Aktuell spelare är " + playerName + " (" + playerChar + ")";   

   //börjar en timer om checkbox är kryssad
   let check = document.querySelector("#timer");

   if (check.checked == true){
       oGameData.timerEnabled = true;
   } 
   
   if(oGameData.timerEnabled == true){
        //anropar intervall funktionen
        oGameData.timerId = setInterval(interval, 5000);
   }
 
    //Uppgift3
    // Lyssnare som lyssnar efter händelse "klick"
    let table = document.querySelector("table");
    table.addEventListener("click", executeMove);
}

function executeMove(e){
    console.log("executeMove");

    //controllera om checkbox är kryssa
    if(oGameData.timerEnabled == true){
        
        //starta om timer-funktion
        clearInterval(oGameData.timerId);
        oGameData.timerId = setInterval(interval, 5000);
   }
    //on man klickar på en td element
    let tableElement = e.target;
    if(tableElement.tagName == "TD"){
        //kontrollera att textrutan är tom
        if((tableElement.textContent !== "X" ) && (tableElement.textContent !=="O")){
            var dataId = tableElement.getAttribute('data-id');
            oGameData.gameField[dataId] = oGameData.currentPlayer;
           
           //när spelare ett är aktuell spelare, sätt till char och färg för spelare 1 på det välde rutan
            if (oGameData.currentPlayer == oGameData.playerOne){
                tableElement.setAttribute('style', 'background-color: ' + oGameData.colorPlayerOne); 
                tableElement.textContent = "X";
                
                //ändra tur till spelare2 och uppdatera utskrift
                oGameData.currentPlayer = oGameData.playerTwo; 
                document.getElementsByTagName("h1")[0].innerHTML = "Aktuell spelare är " + oGameData.nickNamePlayerTwo + " (" + oGameData.playerTwo + ")"; 
                
            }
            
            //när spelare två är aktuell spelare, sätt till char och färg för spelare 2 på det välde rutan
            else if (oGameData.currentPlayer == oGameData.playerTwo){
                tableElement.setAttribute('style', 'background-color: ' + oGameData.colorPlayerTwo);
                tableElement.textContent = "O";
                //ändra tur till spelare1 och uppdatera utskrift
                oGameData.currentPlayer = oGameData.playerOne;  
                document.getElementsByTagName("h1")[0].innerHTML = "Aktuell spelare är " + oGameData.nickNamePlayerOne + " (" + oGameData.playerOne + ")";   
            
            }

             var result = oGameData.checkForGameOver(); //anropa rättningsfunktion
             //om det finns en vinnare eller spelet är oavgjort
             if(result == 1 || result == 2 || result == 3){
                 window.clearInterval(oGameData.timerId);
                this.removeEventListener("click", executeMove); //ta bort lyssnare
                document.getElementById("divInForm").classList.remove("d-none"); // ta bort klassen på formuläret
                //utskrift när spelet är klart beror på vem som vunnit eller om det är oavgjort
                if(result == 1){
                    document.getElementsByTagName("h1")[0].innerHTML = "Vinnare är " +  oGameData.nickNamePlayerOne + " (" + oGameData.playerOne + ")" + "! Spela igen?"; 
                }
                else if(result == 2){
                    document.getElementsByTagName("h1")[0].innerHTML = "Vinnare är " + oGameData.nickNamePlayerTwo + " (" + oGameData.playerTwo +  ")" + "! Spela igen?"; 
                }
                else {
                    document.getElementsByTagName("h1")[0].innerHTML = "Spelet är oavgjort. Spela igen?";
                }
                document.getElementById("gameArea").classList.add("d-none"); // lägger till klassen på elementet med id gameArea
                oGameData.initGlobalObject(); // Anropar funktionen initGlobalObject i oGameData

            }   
        }
        
    }
}

//uppgift4
//timer 
function timer() {
    //skapa en ny div 
    var timerdiv = document.createElement('div');
    
    //skapa cheakbox och label
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = 'timer';
    var label = document.createElement('label');
    label.htmlFor = 'timer';
    
    //sätta värdet på label
    label.appendChild(document.createTextNode('Vill du begränsa tiden till 5 sekunder per drag?'));

    //Addera cheackbox & label till den nya diven och sätte diven förre knappet
    let form = document.getElementById('divInForm');
    var lastdiv= document.getElementById("divWithA");
    form.insertBefore(timerdiv, lastdiv);
    timerdiv.appendChild(checkbox);
    timerdiv.appendChild(label);     

}

//Funktionen som byter tur varje 5 sekunder om aktuell spelare inte gör sitt drag
function interval (){
    console.log("interval");

    // variabel för h1-elementet som nås i hela funktionen
    var headerone =  document.querySelector("h1");

    // if-sats som gör olika utskrifter i h1 beroende på vems tur det är

        if (oGameData.currentPlayer == oGameData.playerOne){  
            
            //ändra tur till spelare 2 och uppdatera utskrift
            oGameData.currentPlayer = oGameData.playerTwo; 
            headerone.textContent = "Aktuell spelare är " + oGameData.nickNamePlayerTwo + " (" + oGameData.playerTwo + ")";

        }
        
        else if (oGameData.currentPlayer == oGameData.playerTwo){
            //ändra tur till spelare 1 och uppdatera utskrift
            oGameData.currentPlayer = oGameData.playerOne;    
            headerone.textContent = "Aktuell spelare är " +  oGameData.nickNamePlayerOne+ " ("+ oGameData.playerOne+ ")";
            
        }
}