import {
    getData
} from './getdata.js';

import {
    render
} from './render.js'

import {
    updateSearch,
    setSearchBar
} from './search.js'

import {
    updateUI
} from './ui.js'

export function routes() {
    routie({
        "": () => {
            let search = setSearchBar();
            const searchButton = document.querySelector('.searchBtn')

            // render top movies
            getData().then(data => {
                const section = document.querySelector('.topTwenty');
                render(data, section);
                setSearchBar();
                // updateUI('topMovies')
            });

            // render searched items if in local storage
            getData(search).then(data => {
                const section = document.querySelector('.searchResults');
                render(data, section);
                updateUI('searchWrapper', 'topMovies')
            });

            // re-render searched items on click
            searchButton.addEventListener("click", updateUI)

        },
        movies: () => {
            // render top movies
            getData().then(data => {
                const section = document.querySelector('.topTwenty');
                render(data, section);
                setSearchBar();
                updateUI('topMovies')
            });
        },
        //#giphy/425367
        // 'gifs/:id': id => {
        //   loader('active');
        //   getData(id).then(data => {
        //     render(data, id);
        //     updateUI('giphy');
        //   });
        // }
    });
}