let student = 
    {
         name: "Sara",
         age: 18,
         marks: 62 
    };

let student2 = 
    {
         name: "Ali",
         age: 20,
         marks: 55 
    };

    console.log(student);
    console.log(student.name);
    console.log(student.marks);
    console.log(student.age);
 
    student.marks = 65;
    console.log(student.marks);

    student.city = "Lahore";
    console.log(student.city);

    student2.marks = 85;
    student2.grade = "B";
    student2.subject = "JavaScript";
    console.log(student2);

   console.log(student2.subject);

// Experiment 14
  delete student2.subject;
  console.log(student2);

  console.log("subject" in student2);
  console.log("grade" in student2);
  console.log(Object.keys(student2).length);
  console.log(Object.values(student2));

    
    

    
    