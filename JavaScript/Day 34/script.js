let students = [
    { name: "Ali", marks: 55 },
    { name: "Sara", marks: 62 },
    { name: "Ahmed", marks: 98 },
    { name: "Hina", marks: 85 }
];

let result = students.find(function(student){
return student.marks > 80 ;
});
console.log(result.name);