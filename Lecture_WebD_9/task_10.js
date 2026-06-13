const users = [
  { user: "A", actions: ["login", "logout"] },
  { user: "B", actions: ["login", "purchase", "logout"] }
];

const actionCounts = users
  .flatMap(user => user.actions)
  .reduce((acc, action) => {
    acc[action] = (acc[action] || 0) + 1;
    return acc;
  }, {});

const mostCommonAction = Object.entries(actionCounts)
  .sort((a, b) => b[1] - a[1])[0];

console.log(" Action Counts:", actionCounts);
console.log("Most Common Action:", mostCommonAction);