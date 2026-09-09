let students = [
 { name: "Sara", marks: 82 },
  { name: "Ahmad", marks: 65 },
  { name: "Ali", marks: 91 },
  { name: "Hina", marks: 48 }
];

let result = students
  .filter(student => student.marks >= 60)
  .map(student => ({
    name: student.name,
    newMarks: student.marks + 5
  }));
console.log(result);