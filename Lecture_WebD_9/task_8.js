const customers = [
  {
    customer: "John",
    orders: [
      { product: "Laptop", amount: 50000 },
      { product: "Mouse", amount: 1000 }
    ]
  }
];

const allOrders = customers.flatMap(customer =>
  customer.orders.map(order => ({
    customer: customer.customer,
    ...order
  }))
);

const spending = customers.map(customer => ({
  customer: customer.customer,
  total: customer.orders.reduce(
    (sum, order) => sum + order.amount,
    0
  )
}));

const highestSpender = spending.reduce((max, customer) =>
  customer.total > max.total ? customer : max
);

console.log("8. Flattened Orders:", allOrders);
console.log("Highest Spending Customer:", highestSpender);