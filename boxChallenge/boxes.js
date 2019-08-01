const submitB = document.getElementById("submitB");//submit button
let input = document.getElementById("text");//user input
let box = document.getElementById("box");//invisible box div

//document.getElementById('newElement').style.backgroundImage="url(images/img.jpg)";

submitB.addEventListener("click", () => {

    for(i=0; i<input.value; i++){
        let element = document.createElement("div");//new element
            element.classList.add("newElement");
        box.appendChild(element);
    }
      
});
