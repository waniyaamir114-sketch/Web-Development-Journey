function changeColor() {
    document.getElementById("heading").style.color = "blue";
}

function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
}



function changeText() {
    document.getElementById("message").innerHTML = "JavaScript changed this text!";
    document.getElementById("message").style.color = "red";
    document.getElementById("message").style.backgroundColor = "lightgray";
    document.getElementById("message").style.fontSize = "30px";
    document.getElementById("message").style.display = "none";
}
      // Experiment 9
function changeText() {
    let message= document.getElementById("message");

    if (message.innerHTML === "Hello! Welcome to website") {
        message.innerHTML = "The text has been changed!";
    }else{
        message.innerHTML = "Hello! Welcome to website";
    }
}
      //experiment10
      function changeColor() {
        document.getElementById("message").style.color = "red";
      }

// Experiment 6
let name = "Waniya";
let age = 18;

console.log(name);
console.log(age);
let score = 90;
console.log(score);
score = 95;
console.log(score);
let marks=10;
let bonus=5;
let total = marks + bonus;
console.log(total);

let a = 10;
let b = 5;
let sum = a + b;
console.log(a-b);
console.log(a*b);
console.log(a/b);