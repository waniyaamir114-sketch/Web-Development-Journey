function calculateResult(name, marks){
    let finalMarks = marks + 5;
   
    if (finalMarks >= 50) {
        return name + " passed with " + finalMarks + " marks";
    } else {
        return name + " failed with " + finalMarks + " marks";
    }   
}
console.log(calculateResult("Sara", 48));
console.log(calculateResult("Ali", 40));
console.log(calculateResult("Ahmad", 60));