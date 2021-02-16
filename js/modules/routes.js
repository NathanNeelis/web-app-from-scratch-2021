/* beautify preserve:start */
import { getData, getDataDetails } from './getdata.js';
import { render, renderBackground } from './render.js';
import { updateSearch, updateSearchIntro, setSearchBar, saveMovieInArray } from './search.js';
import { updateUI } from './ui.js';
/* beautify preserve:end */

export function routes() {
    routie({
        "": () => {
            const searchButton = document.querySelector('.searchBtnIntro');

            getData().then(data => {
                const section = document.querySelector('.background');
                renderBackground(data, section);
                updateUI('intro');
            });

            searchButton.addEventListener("click", updateSearchIntro);
        },
        search: () => {
            let search = setSearchBar();
            const searchButton = document.querySelector('.searchBtn');

            // render searched items if in local storage
            getData(search).then(data => {
                const section = document.querySelector('.searchResults');
                render(data, section, search);
                updateUI('searchWrapper');
            });

            // re-render searched items on click
            searchButton.addEventListener("click", updateSearch);
        },
        movies: () => {
            // Recently viewed movies
            let storageValue = JSON.parse(localStorage.getItem('viewedMovies'));
            const section = document.querySelector('.viewedMovies');
            render(storageValue, section);

            // top moviesh
            getData().then(data => {
                const section = document.querySelector('.topTwenty');
                render(data, section);
                updateUI('topMovies', 'recentlyViewed');
            });

        },
        'movies/:id': id => {
            let search = '';
            // Recently viewed movies
            let storageValue = JSON.parse(localStorage.getItem('viewedMovies'));
            const section = document.querySelector('.viewedMovies');
            render(storageValue, section);

            // movie details
            getDataDetails(id).then(data => {
                const section = document.querySelector('.detailsMovie');
                render(data, section, search, id);
                updateUI('detailsMovie', 'recentlyViewed');
                saveMovieInArray(data);
            });
        }
    });
}