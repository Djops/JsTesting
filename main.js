




let personalMovieDB = {
    count: 0,
    movies: {
    },
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        while (personalMovieDB.count == "" || personalMovieDB.count == null || personalMovieDB.count == isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("сколько фильмов вы просмотрели ?");
        }
    },

    rememberMyFilims: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt("один из послдених просмотреных фильмов ?"),
                b = prompt("на сколько оцените его ?");

            if (a != "" && b != "" && a != null && b != null && a.length < 50 && b.length < 50) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let geners = prompt(`выш любиммый жаннер`).toLowerCase();
            if (geners === "" || geners == null) {
            i--;

            } else {
                personalMovieDB.genres = geners.split(",");
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жаннер: ${i + 1} : ${item} `);
        });
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }

    },

    showMyDB: function (hiden) {
        if (!hiden) {
            console.log(personalMovieDB.privat);
        }
    },
};


















