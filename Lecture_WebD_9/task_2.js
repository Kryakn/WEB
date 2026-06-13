const sales = [
  { category: "Electronics", amount: 500 },
  { category: "Books", amount: 100 },
  { category: "Electronics", amount: 300 },
  { category: "Clothing", amount: 200 }
];

const revenueByCategory = sales.reduce((acc, sale) => {
  acc[sale.category] = (acc[sale.category] || 0) + sale.amount;
  return acc;
}, {});

const categoriesOver300 = Object.entries(revenueByCategory)
  .filter(([_, revenue]) => revenue > 300);

console.log(" Revenue > 300:", categoriesOver300);