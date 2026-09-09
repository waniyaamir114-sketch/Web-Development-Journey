let fruits = ["Apple", "Banana", "Mango", "Grapes"];

let count = 0;

fruits.forEach(function(fruits) {
   if(fruits.length>5){
    count++;
   }
});

 document.getElementById("result").innerHTML =
  "Fruits with more than five letters:"  + count ;