console.log('hello world')

// example API request -> this is for a specific movie.
const endpoint = 'https://api.themoviedb.org/3/movie/550?api_key=172dbac1b2ced3673820d2a54c969fe1'; // movie 550 

// image example 
const movieImage = 'https://image.tmdb.org/t/p' // starter url for images
const movieImageWidth = '/w500'; // the width of the image is 500
const movieImageUrl = 'kqjL17yufvn9OVLyXYpvtyrFfak.jpg'; // This is data from the API

// endpoint themoviedb -> top 20 most popular movies
const url = 'https://api.themoviedb.org/3/discover/movie?'; // discover movies url
const key = 'api_key=172dbac1b2ced3673820d2a54c969fe1'; // api key
const language = '&language=en-US'; // language
const sort = '&sort_by=popularity.desc'; // sort by popularity
const page = '&page=1'; // page 1/500


makeContent()
async function makeContent() {
    getData(url, key, language, sort, page)
        .then(data => {

            // function(s) to transform data  
            let cleanData = '';

            // console logs
            console.log('Incoming data', data)

            // function(s) to render data

        });
}


async function getData(url, key, language, sort, page) {
    const response = await fetch(url + key + language + sort + page);
    const data = await response.json();
    return data;
}