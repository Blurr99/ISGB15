"use strict";

function start(){
    let sida = document.querySelector("#sida");
    sida.style.visibility = "hidden";
    
    let divElement = document.querySelector("div");
    divElement.style.backgroundcolor = "red";
    divElement.addEventListener("click", changeColor);
}

function changeColor(e){
    let listElement = e.target;
    listElement.setAttribute('style', 'background-color: red'); 
}

window.onload = start;