const movies = [
  { title: "Movie A", rating: 8.5, genres: ["Action"] },
  { title: "Movie B", rating: 9.0, genres: ["Drama"] }
];

const genreCount = movies
  .filter(movie => movie.rating > 8)
  .flatMap(movie => movie.genres)
  .reduce((acc, genre) => {
    acc[genre] = (acc[genre] || 0) + 1;
    return acc;
  }, {});

console.log(" Genre Count:", genreCount);