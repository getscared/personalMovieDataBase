"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
  start: () => {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },

  rememberMyFilms: () => {
    //Цикл for
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "");
      const b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },

  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30) {
      console.log("Вы классный зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },

  showMyDB: () => {
    if (personalMovieDB.privat == false) {
      console.log(personalMovieDB);
    }
  },

  writeYourGenres: () => {
    for (let i = 1; i <= 3; i++) {
      const genre = prompt(`Ваш любимый жанр по номером ${i}`, ``);

      if (genre != null && genre != "") {
        personalMovieDB.genres[i - 1] = genre;
      } else {
        i--;
      }
    }
    personalMovieDB.genres.forEach((elem, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${elem}`);
    });
  },

  toggleVisibleMyDB: () => {
    if (personalMovieDB.privat == true) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
};

personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.detectPersonalLevel();

personalMovieDB.showMyDB();

personalMovieDB.writeYourGenres();

personalMovieDB.toggleVisibleMyDB();

console.log(personalMovieDB.privat);

console.log(personalMovieDB);
