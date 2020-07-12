

let numberOfFilms;

function start() {
    while (numberOfFilms == "" || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("сколько фильмов вы просмотрели ?");
    }
}

start();


let personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilims() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("один из послдених просмотреных фильмов ?"),
            b = prompt("на сколько оцените его ?");

        if (a != "" && b != "" && a != null && b != null && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilims();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("просмотрино давольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("вы любте смотреть кино");
    } else if (personalMovieDB.count >= 30) {
        console.log("да вы киноман");
    } else {
        console.log("some erroe");
    }

}

detectPersonalLevel();


function showMyDB(hiden) {
    if (!hiden) {
        console.log(personalMovieDB.privat);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let answer = prompt(`выш любиммый жаннер под номером ${i}`);
        if (answer != "" && answer != null) {
            personalMovieDB.genres[i - 1] = answer;
        } else {
            i--;
        }
    }
}
writeYourGenres();


