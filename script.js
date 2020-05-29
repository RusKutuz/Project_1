"use strict";

let numberOfFilms;
function start() {
   while (numberOfFilms < 1 || numberOfFilms > 5 || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms === undefined) {
  numberOfFilms = + prompt ('Сколько фильмов Вы уже посмотрели?', ' ');
}
}
start();

function ocenkaZritelya () {
  if (numberOfFilms < 2 && numberOfFilms > 0) {
    alert ('Слишком мало фильмов');
  } else if (numberOfFilms > 1 && numberOfFilms < 4) {
    alert ('Вы хороший зритель');
  } else if (numberOfFilms > 3 && numberOfFilms < 6) {
    alert ('Вы киноман!');
  } else {
    alert ('Произошла ошибка');
} 
}
ocenkaZritelya();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function kakieFilmi() {
  for (let i = 0; i < numberOfFilms; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", '');
    const b = + prompt("На сколько оцените его (1-8)?", '');
    if (a != null && a !='' && a.length < 50 & b != null && b > 0 && b < 9) {
    personalMovieDB.movies[a] = b;
    } else {
      i--;
    }
  }
}
kakieFilmi();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
  let gen = prompt (`Ваш любимый жанр №${i}`,'');
  if (gen == null || gen === undefined || gen == '') {
    i--;
  } else {
    personalMovieDB.genres.push(gen);
  }
}
}
writeYourGenres();

function showMyDB (hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);


