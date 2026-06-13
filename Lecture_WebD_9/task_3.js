const paragraph =
  "The quick brown fox jumps over the lazy dog. The fox is quick.";

const words = paragraph
  .toLowerCase()
  .replace(/[^\w\s]/g, "")
  .split(/\s+/);

const wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

const top3Words = Object.entries(wordCount)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 3);

console.log(" Top 3 Frequent Words:", top3Words);