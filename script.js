let numberOfFilms;
// numberOfFilms = prompt('How much movies have you seen?', '');

function start() {
    numberOfFilms = +prompt('How much have you seen?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much have you seen?', '');
    }
}

start();

let personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false


};





function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('один из последниз фильмов', ''),
            b = prompt('Оценка', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('error');
            i--;
        }

    }

    // rememberMyFilms();




}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Low');
    } else if (personalMovieDB.count <= 10 && personalMovieDB >= 30) {
        console.log('Norm');
    } else if (personalMovieDB.count > 30) {
        console.log('High');
    } else {
        console.log('Error');
    }
}
// detectPersonalLevel();

function showMyDatabase(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);

    }

}
showMyDatabase(personalMovieDB.private);

function writeYourGenres(){
   for (let i = 1; i <= 3; i++) {
       const genre = prompt(`You Genre # ${i}`);
       personalMovieDB.genres[i-1] = genre;
   } 
}
writeYourGenres();





// console.log(personalMovieDB);