let movieList = null;
let inputSearch = null;
let triggerMode = false;
const createStyle = () => {
    const headStyle = document.createElement('style');
    headStyle.innerHTML = `
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Arial, serif;
  background: #2F2F31;
}
.wrapper {
  padding: 20px;
  max-width: 1280px;
  margin: 0 auto;
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 8px #0473fb;
  user-select: none;
}
.movies {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
.movie {
  display: flex;
  align-content: center;
  justify-content: center;
}
.movie__image {
  width: 100%;
  object-fit: cover;
}
.search {
  margin-bottom: 30px;
}
.search__label-input {
  margin-bottom: 7px;
  display: block;
}
.search__input {
  padding: 10px;
  width: 400px;
  display: block;
  border: 1px solid #88a6b7;
  border-radius: 3px;
  margin-bottom: 10px;
}
.search__label-checkbox {
  font-size: 12px;
  display: block;
  margin-top: -17px;
  margin-left: 25px;
}`;

    document.querySelector('head').appendChild(headStyle);
}
const createHeader = (container) => {
    const header = document.createElement('h1');
    header.innerText = 'Приложение для поиска фильмов';
    container.appendChild(header);
};
const setAttributes = (el, attrs) => {
    for (let key in attrs) el.setAttribute(key, attrs[key]);
};
const triggerModeHandler = () => triggerMode = !triggerMode;
const createSearchBox = (container) => {
    const searchBox = document.createElement('div');
    const input = document.createElement('input');
    const labelForInput = document.createElement('label');
    const checkbox = document.createElement('input');
    const labelForCheckbox = document.createElement('label');
    searchBox.classList.add('search');
    setAttributes(input, {
        class: 'search__input',
        id: 'search',
        placeholder: 'Начните вводить текст...',
        type: 'text'
    });
    setAttributes(labelForInput, {class: 'search__label-input', for: 'search'});
    labelForInput.innerText = 'Поиск фильмов';
    setAttributes(checkbox, {
        class: 'search__checkbox',
        id: 'checkbox',
        type: 'checkbox'
    });
    checkbox.addEventListener('click', triggerModeHandler);
    setAttributes(labelForCheckbox, {class: 'search__label-checkbox', for: 'checkbox'});
    labelForCheckbox.innerText = 'Добавлять фильмы к существующему списку';
    searchBox.append(labelForInput, input, checkbox, labelForCheckbox);
    container.appendChild(searchBox);
};
const createMarkup = () => {
    const container = document.createElement('div');
    const movies = document.createElement('div');
    createHeader(container);
    createSearchBox(container);
    container.classList.add('wrapper');
    movies.classList.add('movies');
    container.appendChild(movies)
    document.querySelector('body').prepend(container);
    movieList = document.querySelector('.movies');
    inputSearch = document.querySelector('#search');
}
const addMovieToList = (movie) => {
    if (movie && /^https/.test(movie.Poster)) {
        const item = document.createElement('div');
        const img = document.createElement('img');
        img.src = movie.Poster;
        img.classList.add('movie__image');
        item.classList.add('movie');
        item.appendChild(img);
        movieList.appendChild(item);
    }
};
const delay = (() => {
    let timer = 0;
    return (cb, ms) => {
        clearTimeout(timer);
        timer = setInterval(cb, ms)
    };
})();
const clearMoviesMarkup = () => movieList && (movieList.innerHTML = '');
createStyle();
createMarkup();