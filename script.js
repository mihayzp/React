let numberOfFilms;
numberOfFilms = prompt ('How much movies have you seen?', '' );


let personalMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false


};



for (let i=0; i<2; i++) {
    let a = prompt('один из последниз фильмов',''),
    b = prompt('Оценка','');
    
    if(a != null && b != null && a !='' && b !='' && a.length < 50 && b.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('Done');
    } else {
        console.log('error');
        i--;
    }

if(personalMovieDB.count < 10) {
        console.log('Low');
} else if(personalMovieDB.count <= 10 && personalMovieDB >= 30) {
        console.log('Norm');
} else if(personalMovieDB.count > 30) {
        console.log('High');
} else{
    console.log('Error');
}
    

}


    console.log(personalMovieDB);