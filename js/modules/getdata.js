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
        .then(data => store(data))
        .catch(err => {
            console.log(err);
        });
}

function filterObject(results) {
    let items = results.map((results) => {
        return {
            id: results.id,
            title: results.title,
            overview: results.overview,
            popularity: results.popularity,
            poster_path: results.poster_path,
            release_date: results.release_date,
            vote_average: results.vote_average,
            vote_count: results.vote_count
        }
    });

    return items
}

function store(data) {
    // asynchronously store data before returning, fake it with timeout
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1);
    });
}