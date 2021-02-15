/* beautify preserve:start */
import { getData } from './getdata.js';
import { render } from './render.js';
/* beautify preserve:end */

export function updateSearch() {
    // sets wrapper to show on click
    const wrapper = document.querySelector('.searchResultsWrapper');
    wrapper.classList.remove('hide');

    // saving input in local storage
    const storage = window.localStorage;
    let search = document.querySelector('.searchField').value;
    storage.setItem('searching', search);

    // console.log('this is what you are searching for:', search)

    // fetch data from input value
    getData(search).then(data => {
        const section = document.querySelector('.searchResults');
        section.innerHTML = '';
        render(data, section, search);
    });
}

// set searchbar with latest search item
export function setSearchBar() {
    // checks the local storage and updates the input field with the value
    let storageValue = localStorage.getItem('searching')
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

export function saveMovieInArray(data) {
    const storage = window.localStorage;

    let movie = [];
    let oldMovies = JSON.parse(storage.getItem("viewedMovies") || "[]");
    let new_movie = data;

    movie = [...oldMovies];
    movie.unshift(new_movie);

    let cleanMovie = checkForDoubles(movie);
    let cleanMovieArray = arrayLimited(cleanMovie);
    storage.setItem('viewedMovies', JSON.stringify(cleanMovieArray));


    // console.log('storage values', storageValue);

    // console.log(movie.length)
    // resource: https://coderwall.com/p/ewxn9g/storing-and-retrieving-objects-with-localstorage-html5
}


function checkForDoubles(movie) {
    const uniqueArray = movie.filter((value, index) => {
        const keys = JSON.stringify(value);
        return index === movie.findIndex(obj => {
            return JSON.stringify(obj) === keys;
        });
    });

    return uniqueArray;

    // Thanks to Eydrian @ stackoverflow
    // Resource: https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript

}

function arrayLimited(data) {
    let limitedArray = data;
    if (limitedArray.length > 10) {
        limitedArray.pop();
    }
    return limitedArray;
}