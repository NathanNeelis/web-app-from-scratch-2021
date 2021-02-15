import {
    getData,
    getDataDetails
} from './getdata.js';

import {
    render,
    renderDetailPage,
    resetPage
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
            });

            // render searched items if in local storage
            getData(search).then(data => {
                const section = document.querySelector('.searchResults');
                render(data, section);
                updateUI('searchWrapper', 'topMovies')
            });

            // re-render searched items on click
            searchButton.addEventListener("click", updateSearch)

        },
        search: () => {
            let search = setSearchBar();
            const searchButton = document.querySelector('.searchBtn')

            // render searched items if in local storage
            getData(search).then(data => {
                const section = document.querySelector('.searchResults');
                render(data, section);
                updateUI('searchWrapper')
            });

            // re-render searched items on click
            searchButton.addEventListener("click", updateSearch)

        },
        movies: () => {
            // render top movies
            getData().then(data => {
                const section = document.querySelector('.topTwenty');
                // resetPage(section)
                render(data, section);
                updateUI('topMovies')
            });
        },
        'movies/:id': id => {
            // let search = undefined;
            getDataDetails(id).then(data => {
                const section = document.querySelector('.detailsMovie');
                renderDetailPage(data, section);
                updateUI('detailsMovie')
            });
        }


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