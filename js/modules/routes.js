/* beautify preserve:start */
import { getData, getDataDetails } from './getdata.js';
import { render } from './render.js';
import { updateSearch, setSearchBar, saveMovieInArray } from './search.js';
import { updateUI } from './ui.js';
/* beautify preserve:end */

export function routes() {
    routie({
        "": () => {
            let search = setSearchBar();
            const searchButton = document.querySelector('.searchBtn')

            getData().then(data => {
                const section = document.querySelector('.topTwenty');
                render(data, section);
            });

            // render searched items if in local storage
            getData(search).then(data => {
                const section = document.querySelector('.searchResults');
                render(data, section, search);
                updateUI('searchWrapper', 'topMovies')
            });

            // re-render searched items on click
            searchButton.addEventListener("click", updateSearch)

        },
        movies: () => {
            let storageValue = JSON.parse(localStorage.getItem('viewedMovies'));
            const section = document.querySelector('.viewedMovies');
            render(storageValue, section)


            getData().then(data => {
                const section = document.querySelector('.topTwenty');
                render(data, section);
                updateUI('topMovies', 'recentlyViewed')
            });

        },
        'movies/:id': id => {
            let search = '';
            getDataDetails(id).then(data => {
                const section = document.querySelector('.detailsMovie');
                render(data, section, search, id);
                updateUI('detailsMovie')
                saveMovieInArray(data);
            });
        }
    });
}