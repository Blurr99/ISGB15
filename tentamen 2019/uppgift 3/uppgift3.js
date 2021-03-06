//Uppgift 3a)
function modifyDOM(){
    let allPElements = document.querySelectorAll("div p"); //gets all p element that are in a div element 

    for(let i = 0; i < allPElements.length; i++){
        let pElementChild = allPElements.item(i).firstChild; //gets content that is in the current p-tag
        let textnode = document.createTextNode(i + 1); //creates textnode with new value for p-tag
        if (pElementChild === null) { //if p-tag is empty
            allPElements.item(i).appendChild(textnode); //add textnode to p-tag
        }
        else {
            allPElements.item(i).replaceChild(textnode, pElementChild); //replace current p-tag with textnode
        }
        
    }
}
modifyDOM();

//Uppgift 3b)

let divElement = document.querySelector("div");

divElement.addEventListener("click", divElementClick);

function divElementClick(event){

    //a. 
    event.preventDefault(); 

    //b. 
    event.stopPropagation();

    //c.
    let pElement = event.target;
    console.log(pElement.firstChild); //prints text in p-element
    console.log(event); //prints out the nodetype?
}