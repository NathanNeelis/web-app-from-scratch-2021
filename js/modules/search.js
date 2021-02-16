/* beautify preserve:start */
import { getData } from './getdata.js';
import { render } from './render.js';
import { checkForDoubles, arrayLimited } from './transform.js';
/* beautify preserve:end */

function updateSearch() {
    // sets wrapper to show on click
    const wrapper = document.querySelector('.searchResultsWrapper');
    wrapper.classList.remove('hide');

    // saving input in local storage
    const storage = window.localStorage;
    let search = document.querySelector('.searchField').value;
    storage.setItem('searching', search);

    // fetch data from input value
    getData(search).then(data => {
        const section = document.querySelector('.searchResults');
        section.innerHTML = '';
        render(data, section, search);
    });
}

function updateSearchIntro() {
    // saving input in local storage
    const storage = window.localStorage;
    let search = document.querySelector('.searchFieldIntro').value;
    storage.setItem('searching', search);

    // fetch data from input value
    getData(search).then(data => {
        const section = document.querySelector('.searchResults');
        section.innerHTML = '';
        render(data, section, search);
    });
}

// set searchbar with latest search item
function setSearchBar() {
    // checks the local storage and updates the input field with the value
    let storageValue = localStorage.getItem('searching');
    let search = document.querySelector('.searchField');
    search.value = storageValue;

    // check on local storage
    const wrapper = document.querySelector('.searchResultsWrapper');
    wrapper.classList.remove('hide')

    if (storageValue == null) {
        wrapper.classList.add('hide');

    } else if (storageValue != null) {
        wrapper.classList.remove('hide');
    }

    return storageValue
}

function saveMovieInArray(data) {
    const storage = window.localStorage;

    let movie = [];
    let oldMovies = JSON.parse(storage.getItem('viewedMovies') || '[]');
    let new_movie = data;

    movie = [...oldMovies];
    movie.unshift(new_movie);

    let cleanMovie = checkForDoubles(movie);
    let cleanMovieArray = arrayLimited(cleanMovie);
    storage.setItem('viewedMovies', JSON.stringify(cleanMovieArray));

    // resource: https://coderwall.com/p/ewxn9g/storing-and-retrieving-objects-with-localstorage-html5
}


/* beautify preserve:start */
export { updateSearch, updateSearchIntro, saveMovieInArray, setSearchBar }
/* beautify preserve:end */