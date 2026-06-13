const products = [
  { name: "Laptop", stock: 5, price: 50000 },
  { name: "Phone", stock: 0, price: 20000 },
  { name: "Tablet", stock: 10, price: 15000 }
];

const availableProducts = products
  .filter(product => product.stock > 0)
  .map(product => ({
    ...product,
    inventoryValue: product.stock * product.price
  }));

const totalInventoryValue = availableProducts.reduce(
  (sum, product) => sum + product.inventoryValue,
  0
);

console.log(" Available Products:", availableProducts);
console.log("Total Inventory Value:", totalInventoryValue);
