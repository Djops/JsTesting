




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
        for (let i = 1; i <= 3; i++) {
            let answer = prompt(`выш любиммый жаннер под номером ${i}`);
            if (answer != "" && answer != null) {
                personalMovieDB.genres[i - 1] = answer;
            } else {
                i--;
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

personalMovieDB.showMyDB()
personalMovieDB.writeYourGenres()
















