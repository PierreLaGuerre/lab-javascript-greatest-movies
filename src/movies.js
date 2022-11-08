// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const directors = moviesArray.map(({ director }) => director);
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const spielbergDramaMovies = [];
  for (let i = 0; i < moviesArray.length; i++) {
    if (
      moviesArray[i].director === "Steven Spielberg" &&
      moviesArray[i].genre.includes("Drama")
    ) {
      spielbergDramaMovies.push(moviesArray[i].title);
    }
  }
  return spielbergDramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  const avgScores = moviesArray.reduce((a, b) => {
    return a + b.score / moviesArray.length;
  }, 0);
  return avgScores.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesScore(moviesArray) {
  const scoresDrama = moviesArray.filter((movie) =>
    movie.genre.includes("Drama")
  );
  const averageScoresDrama = scoresDrama.reduce((a, b) => {
    return a + b.score / moviesArray.length;
  }, 0);
  return averageScoresDrama;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const sortedByYear = moviesArray.slice().sort((a, b) => {
    if (a.Year > b.Year) return 0;
    else return -1;
  });
  return sortedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const sortedAlphabetically = moviesArray.slice().sort((a, b) => {
    if (a.title > b.title) return 0;
    else return -1;
  });
  const titles = sortedAlphabetically.map((el) => el.title);
  return titles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== "undefined") {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
