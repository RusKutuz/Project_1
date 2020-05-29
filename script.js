"use strict";

let numberOfFilms = 0;
while (numberOfFilms < 1 || numberOfFilms > 5) {
numberOfFilms = + prompt ('Сколько фильмов Вы уже посмотрели?', ' ');
}
if (numberOfFilms < 2 && numberOfFilms > 0) {
  alert ('Слишком мало фильмов');
} else if (numberOfFilms > 1 && numberOfFilms < 4) {
  alert ('Вы хороший зритель');
} else if (numberOfFilms > 3 && numberOfFilms < 6) {
  alert ('Вы киноман!');
} else {
  alert ('Произошла ошибка');
}
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

for (let i = 0; i < numberOfFilms; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", '');
  const b = + prompt("На сколько оцените его (1-8)?", '');
  if (a != null && a !='' && a.length < 50 & b != null && b > 0 && b < 9) {
  personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}
console.log(personalMovieDB);
