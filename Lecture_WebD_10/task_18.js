const people = [
  { name: "John", age: 25 },
  { name: "Emma", age: 16 },
  { name: "Alex", age: 20 }
];

const adults = people
  .filter(person => person.age >= 18)
  .map(person => person.name);

console.log("18.", adults);