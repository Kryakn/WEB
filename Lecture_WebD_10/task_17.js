const nums = [10, 20, 30, 40];

const sumNumbers = nums.reduce(
  (sum, num) => sum + num,
  0
);

console.log("Sum of numbers", sumNumbers);