// image example 
const movieImage = 'https://image.tmdb.org/t/p' // starter url for images
const movieImageWidth = '/w200'; // the width of the image is 500
const movieImageUrl = 'kqjL17yufvn9OVLyXYpvtyrFfak.jpg'; // This is data from the API

// endpoint themoviedb -> top 20 most popular movies
const endpoint = 'https://api.themoviedb.org/3'; // base url

// endpoint variables
const discover = "/discover"
const search = "/search"
const movie = "/movie?"
const key = 'api_key=172dbac1b2ced3673820d2a54c969fe1'; // api key
const language = '&language=en-US'; // language
const adult = '&include_adult=false';
const sort = '&sort_by=popularity.desc'; // sort by popularity
const page = '&page=1'; // page 1/500
const preSearch = '&query=';

// API URLS
const urlTopMovies = endpoint + discover + movie + key + language + sort + page;
const urlSearch = endpoint + search + movie + key + language + adult + preSearch;



// render page 
renderTopMovies()
defaultSearch()

// get input value
async function defaultSearch() {
    // check for storage
    let storageValue = localStorage.getItem('searching')
    checkForStorage(storageValue)

    // get the data
    const data = filterObject(await getData(urlSearch + storageValue));
    console.log('this is search data', data)

    // render
    const section = document.querySelector('.searchResults');
    section.innerHTML = '';
    renderToHtml(data, section);
    setSearchBar();


    // // selection section to render html
    // const section = document.querySelector('.searchResults');

    // // storage value
    // let storageValue = localStorage.getItem('searching')

    // // checkForStorage(storageValue, section);
    // checkForStorage(storageValue);

    // getData(urlSearch + storageValue)
    //     .then(data => {

    //         // function(s) to transform data  
    //         let cleanObject = filterObject(data)

    //         console.log(data)

    //         // function(s) to render data
    //         setSearchBar(); // Sets local storage item in search bar
    //         section.innerHTML = ''; // remove existing HTML
    //         renderToHtml(cleanObject, section) // renders the top movies
    //     });

}

// get input value
async function getInput() {

    // saving input in local storage
    const storage = window.localStorage;
    let search = document.querySelector('.searchField').value;
    storage.setItem('searching', search)
    console.log('this is what you are searching for:', search)



    // storage value
    let storageValue = localStorage.getItem('searching')

    checkForStorage(storageValue);

    // get the data
    const data = filterObject(await getData(urlSearch + storageValue));
    console.log('this is search data', data)

    // render
    const section = document.querySelector('.searchResults');
    section.innerHTML = '';
    renderToHtml(data, section);


    // // selection section to render html
    // const section = document.querySelector('.searchResults');

    // getData(urlSearch + storageValue)
    //     .then(data => {

    //         // function(s) to transform data  
    //         let resultsPageOne = data.results;
    //         let cleanObject = filterObject(data)

    //         console.log(data)

    //         // function(s) to render data
    //         setSearchBar(); // Sets local storage item in search bar
    //         section.innerHTML = ''; // remove existing HTML
    //         renderToHtml(cleanObject, section) // renders the top movies
    //     });

}


// resource removing inner html: https://stackoverflow.com/questions/3450593/how-do-i-clear-the-content-of-a-div-using-javascript

const searchButton = document.querySelector('.searchBtn')
searchButton.addEventListener("click", getInput)

async function renderTopMovies() {
    const data = filterObject(await getData(urlTopMovies));
    const section = document.querySelector('.topTwenty');
    renderToHtml(data, section);
    setSearchBar();

    const allData = await getData(urlTopMovies)
    console.log('Incoming data', allData)
    console.log('Incoming data', data)

    // getData(urlTopMovies)
    //     .then(data => {

    //         // function(s) to transform data  
    //         let resultsPageOne = data.results;
    //         let cleanObject = filterObject(resultsPageOne)
    //         const section = document.querySelector('.topTwenty');

    //         // console logs
    //         // console.log('Incoming data', data)
    //         // console.log('results page 1', resultsPageOne)
    //         // console.log('new object', cleanObject)

    //         // function(s) to render data
    //         setSearchBar(); // Sets local storage item in search bar
    //         renderToHtml(cleanObject, section) // renders the top movies

    //     });
}


async function getData(URL) {
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
}


// OUTPUT HTML P ELEMENTS IN DIV ELEMENTS
function renderToHtml(data, section) {
    for (let id in data) {
        // create DIV
        let newElement = document.createElement('div'); // creates a div
        newElement.id = data[id].title; // gives all divs an id with the name of the movie 
        newElement.className = "movie"; // gives all divs a class of movie


        // Create P element
        let heading = document.createElement('h4'); // creates a paragraph element
        heading.innerHTML = data[id].title; // adds the movie titles to paragraph elements

        // create another div for images
        let imageWrap = document.createElement('div'); // creates a div
        imageWrap.className = "movie-zoom"; // gives all divs a class of movie

        // Create IMG element
        let movieImages = document.createElement("img");
        movieImages.src = 'https://image.tmdb.org/t/p/w200/' + data[id].poster_path;

        // append 
        section.appendChild(newElement); // appends the divs to the section
        document.getElementById(data[id].title).appendChild(imageWrap).appendChild(movieImages);
        document.getElementById(data[id].title).appendChild(heading); // appends the paragraphs to the right divs
    }
}

// Resource: https://stackoverflow.com/questions/5886144/create-divs-from-array-elements 

// creates a new object with the data I want, so I dont have to much data that I wont be using
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

// set searchbar with latest search item
function setSearchBar() {
    let storageValue = localStorage.getItem('searching')
    let search = document.querySelector('.searchField');
    search.value = storageValue;
}

// checks if there is an item in storage. IF not, hides the search results
function checkForStorage(storageValue) {
    const wrapper = document.querySelector('.searchResultsWrapper');
    wrapper.classList.remove('hide')

    if (storageValue == null) {
        wrapper.classList.add('hide');

    } else if (storageValue != null) {
        wrapper.classList.remove('hide');
    }
}