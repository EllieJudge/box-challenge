let wrapper = document.getElementById("wrapper");
let newElement = document.createElement("div");
let textNode = document.createTextNode("JS");

newElement.id = "box";
newElement.appendChild(textNode);
wrapper.appendChild(newElement)