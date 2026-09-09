let marks =[10,20,30];

let total = marks.reduce((sum, mark) => {
    return sum + mark;
}, 0);

console.log(total);
