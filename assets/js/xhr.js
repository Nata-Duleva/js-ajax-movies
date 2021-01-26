// const getData = (url) => new Promise((resolve, reject) => {
//     console.log(url)
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.send();
//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             let json = JSON.parse(xhr.response);
//             resolve(json.Search);
//         } else reject(xhr.statusText);
//     };
//     xhr.onerror = (err) => reject(err);
// });

const getData = (url) => fetch(url)
    .then((res) => res.json())
    .then((json) => {
        if (!json || !json.Search) {
            sweetAlert(`Нет фильмов с таким названием`)
            throw Error(`Сервер вернул неправельный объек`)
        }
        return json.Search;
    });


// const search2 = 'Superman';
// const search3 = 'Batman';

// не работает
// getData(`http://www.omdbapi.com/?apikey=381e7ecb&s=${search}`)
// .then(movies => console.log(movies));


// let ironman = getData(`http://www.omdbapi.com/?i=tt3896198&apikey=381e7ecb&s=${search}`);
// let superman = getData(`http://www.omdbapi.com/?i=tt3896198&apikey=381e7ecb&s=${search2}`);
// let batman = getData(`http://www.omdbapi.com/?i=tt3896198&apikey=381e7ecb&s=${search3}`);
//
// ironman.then(movies => movies.forEach(movie => addMovieToList(movie)));
// superman.then(movies => movies.forEach(movie => addMovieToList(movie)));
// batman.then(movies => movies.forEach(movie => addMovieToList(movie)));
//
// Promise.all([ironman, superman, batman])
//     .then(res => res.forEach(movies => movies.forEach(movie => addMovieToList(movie))));
let searchLast = null;
inputSearch.addEventListener('keyup', (e) => {
    delay(() => {
        const searchString = e.target.value;
        if (searchString && searchString.length > 3 && searchString !== searchLast) {
            if (!triggerMode) clearMoviesMarkup();
            getData(`https://www.omdbapi.com/?i=tt3896198&apikey=381e7ecb&s=${searchString}`)
                .then(movies => movies.forEach(movie => addMovieToList(movie)))
                .catch(err => console.log(err));
        }
        searchLast = searchString;
    }, 1000);
});


