const repositories = [
  { repo: "A", stars: 100, forks: 50 },
  { repo: "B", stars: 200, forks: 80 }
];

const repoScores = repositories.map(repo => ({
  ...repo,
  popularityScore: repo.stars * 2 + repo.forks
}));

const topRepository = repoScores.reduce((max, repo) =>
  repo.popularityScore > max.popularityScore ? repo : max
);

console.log("Top Repository:", topRepository);