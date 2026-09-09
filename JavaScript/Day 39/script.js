function studentResult(name, marks) {
    if (marks >=80) {
        return name + " got grade A ";
    } else if(marks >= 70) {
        return name + " got grade B ";
    } else if(marks >= 60) {
        return name + " got grade C ";
    } else if(marks >= 50) {
        return name + " got grade D ";
    } else {
        return name + " failed the exam ";
    }
}
console.log(studentResult("Sara", 88));
console.log(studentResult("Ali", 73));
console.log(studentResult("Ahmad", 45));