let button = document.getElementById("myButton");
let message = document.getElementById("message");


button.addEventListener("dblclick", function() {
    message.innerHTML = "You double-clicked the button!";
});

let heading = document.getElementById("heading");
heading.addEventListener("mouseover", function() {
    heading.style.color = "red";
});

heading.addEventListener("mouseout", function() {
    heading.style.color = "black";
});

let box= document.getElementById("box");

box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "yellow";
});

 box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "lightblue";
});     

let myForm = document.getElementById("myForm");
let output = document.getElementById("output");

myForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    output.textContent = "Form submitted!";
});
