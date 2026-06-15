const cart = [
  { item: "Book", price: 200 },
  { item: "Pen", price: 20 },
  { item: "Bag", price: 500 }
];

const cartValue = cart.reduce(
  (sum, item) => sum + item.price,
  0
);

console.log("Cart Value", cartValue);