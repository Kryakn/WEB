const text = "The fox is quick. The fox is smart.";

const foxCount = text
  .toLowerCase()
  .replace(/[^\w\s]/g, "")
  .split(" ")
  .filter(word => word === "fox")
  .length;

console.log( "Foxes appear",foxCount);