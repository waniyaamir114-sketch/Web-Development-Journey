let students = [
    {
        name: "Sara",
        marks: 85
    },
    {
        name: "Ali",
        marks: 72
    },
    {
        name: "Ahmad",
        marks: 91
    }
];
           // Experiment 1 showing ali marks and ahmad name

           console.log(students[1].marks);
           console.log(students[2].name);

           // Experiment 2 

           students[1].marks = 80;
           console.log(students[1].marks);

           // Challenge 2

           students[0].marks = 90;
           console.log(students[0].marks);

           students[2].name = "Ahmed";  
           console.log(students[2].name);

           // Experiment 3 

           students.push({
               name: "Fatima",
               marks: 88
           });
           console.log(students);

           // challenge 3

           students.push({
            name: "Hina",
            marks: 95
        });
        console.log(students);
        
          // Experiment 4
        
          console.log(students[4].name);
          console.log(students[4].marks);
         
          //Challenge 4

          console.log(students[3].marks);
          console.log(students[2].marks);
          console.log(students[4].name);
          
         // Experiment 5 + Challenge

         for (let i = 0; i < students.length; i++) {
            console.log(students[i].name + " got marks " + students[i].marks);
         }

         // Experiment 6 + Challenge

         for (let i = 0; i < students.length; i++) {
         if (students[i].marks >= 80) {
         console.log(students[i].name);
         }
         }

         // Experiment 7 + Challenge

         let totalMarks = 0;

         for (let i = 0; i < students.length; i++) {
         totalMarks = totalMarks + students[i].marks;
         }

         console.log(totalMarks);