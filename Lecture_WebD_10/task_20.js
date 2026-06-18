const results = [
  { name: "John", marks: 80 },
  { name: "Emma", marks: 40 },
  { name: "Alex", marks: 70 }
];

const passedStudents = results
  .filter(student => student.marks >= 50)
  .map(student => student.name);

console.log("Passed Student", passedStudents);