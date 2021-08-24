let numberOfFilms;
numberOfFilms = prompt ('How much movies have you seen?', '' );
console.log(numberOfFilms);

let personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false


};

let a = prompt('один из последниз фильмов',''),
    b = prompt('Оценка',''),
    c = prompt('один из последниз фильмов',''),
    d = prompt('Оценка','');

    personalMovieDB.movies[a] = b;
    personalMovieDB.movies[c] = d;

    console.log(personalMovieDB);