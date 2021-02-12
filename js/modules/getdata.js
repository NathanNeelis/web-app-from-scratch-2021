import {
    filterObject,
    removeGarbage
} from './transform.js'

export function getData(search) {

    const endpoint = 'https://api.themoviedb.org/3'; // base url

    // endpoint variables
    const discover = "/discover"
    const searching = "/search"
    const movie = "/movie?"
    const key = 'api_key=172dbac1b2ced3673820d2a54c969fe1'; // api key
    const language = '&language=en-US'; // language
    const adult = '&include_adult=false';
    const sort = '&sort_by=popularity.desc'; // sort by popularity
    const page = '&page=1'; // page 1/500
    const preSearch = '&query=';

    let url = '';

    if (search) {
        url = endpoint + searching + movie + key + language + adult + preSearch + search;
    } else {
        url = endpoint + discover + movie + key + language + sort + page;
    }


    return fetch(url)
        .then(response => response.json())
        .then(data => filterObject(data.results))
        .then(data => removeGarbage(data))
        .catch(err => {
            console.log(err);
        });
}

export function getDataDetails(id) {

    const endpoint = 'https://api.themoviedb.org/3'; // base url
    const movie = "/movie/"
    const key = '?api_key=172dbac1b2ced3673820d2a54c969fe1'; // api key

    let url = endpoint + movie + id + key;

    return fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('raw detail data', data)
            return data;
        })
        // .then(data => filterObject(data))
        // .then(data => removeGarbage(data))
        .catch(err => {
            console.log(err);
        });
}