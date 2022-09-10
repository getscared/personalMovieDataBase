"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let a;
let b;

//Цикл for
for (let i = 0; i < 2; i++) {
  a = prompt("Один из последних просмотренных фильмов?", "");
  b = prompt("На сколько оцените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    i--;
  }
}

//Цикл do...while
// let i = 0;
// do {
//   a = prompt("Один из последних просмотренных фильмов?", "");
//   b = prompt("На сколько оцените его?", "");
//   i++;
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     i--;
//     console.log("error");
//   }
// } while (i < 2);

//Цикл While
// let i = 0;
// while (i < 2) {
//   a = prompt("Один из последних просмотренных фильмов?", "");
//   b = prompt("На сколько оцените его?", "");
//   i++;
//   if (a != null && b != null && a != "" && b != "" && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log("done");
//   } else {
//     i--;
//     console.log("error");
//   }
// }

if (personalMovieDB.count < 10) {
  console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
  console.log("Вы классный зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("Произошла ошибка");
}

console.log(personalMovieDB);
