"use strict";



const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    while (personalMovieDB.count < 1 || personalMovieDB.count > 5 || personalMovieDB.count == null ||
      isNaN(personalMovieDB.count) || personalMovieDB.count === undefined) {
      personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < personalMovieDB.count; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", '');
      const b = +prompt("На сколько оцените его (1-8)?", '');
      if (a != null && a != '' && a.length < 50 & b != null && b > 0 && b < 9) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 2 && personalMovieDB.count > 0) {
      alert('Слишком мало фильмов');
    } else if (personalMovieDB.count > 1 && personalMovieDB.count < 4) {
      alert('Вы хороший зритель');
    } else if (personalMovieDB.count > 3 && personalMovieDB.count < 6) {
      alert('Вы киноман!');
    } else {
      alert('Произошла ошибка');
    }
  },
  showMyDB: function (priv) {
    if (priv == false) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genre = prompt(`Ваш любимый жанр №${i}`, '').toLowerCase();
      if (genre === null || genre === undefined || genre == '') {
        console.log("Вы ввели некорректные данные");
        i--;
      } else {
        personalMovieDB.genres.push(genre);
      }
    }
    personalMovieDB.genres.forEach((elem, i) => {
      console.log(`Любимый жанр №${i+1} - это ${elem}`);
    });
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat == false) {
      personalMovieDB.privat = true;
    } else {
      personalMovieDB.privat = false;
    }
  },
};












