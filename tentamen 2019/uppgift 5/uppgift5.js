"use strict";
//not needed 
const element = document.getElementById("send");
element.addEventListener("click", validate);

function validate(){
    try{
        let radioNow = document.querySelector("#rbNow");
        let radioLater = document.querySelector("#rbLater");
        let textArea = document.querySelector("#txtsubject");
        let select = document.querySelector("#time")
        let time = select.options[select.selectedIndex].value; //gets value of selected item
    
        if ((radioNow.checked === false) && (radioLater.checked === false)){
             throw new Error("Någon av radioknapparna måste vara vald");
        }

        if(textArea.value.length < 5 ){
            throw new Error("Textarean måste innehålla minst 5 tecken");
        }

        if(radioLater.checked === true){
            if(time == ""){
                throw new Error("Tid måste väljas till något annat än ”Välj en tid” om rbLater är vald");
            }
        }

        if(radioNow.checked === true){
            if(time !== ""){
                throw new Error("Tid får inte vara vald till annat än ”Välj en tid” om rbNow är vald");
            }
        }
        return true;
   }
    
    catch(oError){
        let errorH1 = document.querySelector("#errormsg");
        errorH1.textContent = oError.message;
        return false;
   }
}