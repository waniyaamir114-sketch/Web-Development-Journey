function calculateGrade(name, marks) {
    if (marks >= 80){
        return name + " got grade A ";
    }
    else if(marks >= 70){
        return name + " got grade B ";
    }
    else if(marks >= 60){
        return name + " got grade C ";
    }
    else if (marks >= 50){
        return name + " got grade D ";
    }
    else {
        return name + " got grade F ";
    }
}

console.log(calculateGrade("Sara", 85));
console.log(calculateGrade("Ali", 73));
console.log(calculateGrade("Ahmad", 65));
console.log(calculateGrade("Hina", 45));