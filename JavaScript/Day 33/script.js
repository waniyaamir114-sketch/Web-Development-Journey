let marks = [10,20,30,40];
let total = marks.reduce(function(sum, marks){
    return sum + marks ;
}, 0);
console.log(total);