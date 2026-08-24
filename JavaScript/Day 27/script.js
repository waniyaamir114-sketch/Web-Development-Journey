let fruits = ["Apple", "Banana", "Cherry", "Date"];

fruits.forEach(function(fruit,index) {
    document.getElementById("result").innerHTML += 
     "Fruit " + (index+1) + " is " + fruit + "<br>";
});

let totalFruits = fruits.length;
document.getElementById("result").innerHTML +=
"<br>Total fruits: " + totalFruits;