const transactions = [
  { type: "credit", amount: 1000 },
  { type: "debit", amount: 300 },
  { type: "credit", amount: 500 }
];

const totalCredits = transactions
  .filter(t => t.type === "credit")
  .reduce((sum, t) => sum + t.amount, 0);

const totalDebits = transactions
  .filter(t => t.type === "debit")
  .reduce((sum, t) => sum + t.amount, 0);

const balance = totalCredits - totalDebits;

console.log(" Total Credits:", totalCredits);
console.log("Total Debits:", totalDebits);
console.log("Final Balance:", balance);