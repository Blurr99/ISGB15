"use strict";
window.onload = start;
function start(){
    //hides sida
    let sida = document.querySelector("#sida");
    sida.style.visibility = "hidden"; //hide "sida"
    
    
    let ulElement = document.querySelector("ul");
    ulElement.addEventListener("click", clickMenu );
    function clickMenu(event){
        //change backgroundcolor to red 
        event.target.style.backgroundColor = 'red';

        let menyval = event.target.value; //get value-tag from clicked element

        if(menyval == 1){
            sida.style.visibility = ""; //delete all visibility-style-properties to make "sida" visible again
        }

        if(menyval == 2){
            let headerOne = document.querySelector("h1");
            let headerOneChild = headerOne.firstChild; //get text in h1

            //change text in h1-tag
            //headerOne.textContent = "Sida 2"; //or textnode:
            let textSida2 = document.createTextNode("Sida 2");
            headerOne.replaceChild(textSida2, headerOneChild);
        }

        if(menyval == 3){
            let bild = document.createElement("IMG"); //create img-element
            bild.setAttribute("src", "bild.jpg"); //add link to picture
            bild.setAttribute("alt", "en bild"); //add alt - attribute
            sida.appendChild(bild);
        }
    }


}
