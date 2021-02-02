console.log('hello world, javascript is working')

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
            let resultsPageOne = data.results;
            let cleanObject = filterObject(resultsPageOne)
            // let topTwentyTitles = filterData(cleanObject, 'title')
            // let topTwentyImages = filterData(cleanObject, 'poster_path')


            // console logs
            console.log('Incoming data', data)
            console.log('results page 1', resultsPageOne)
            console.log('new object', cleanObject)


            // function(s) to render data
            arrayToHtml(cleanObject)

        });
}


async function getData(url, key, language, sort, page) {
    const response = await fetch(url + key + language + sort + page);
    const data = await response.json();
    return data;
}


// returns an array of all data in a specific column
function filterData(dataArray, column) {
    return dataArray.map(result => result[column]);
}


// OUTPUT HTML P ELEMENTS IN DIV ELEMENTS
function arrayToHtml(data) {
    let section = document.querySelector('.topTwenty'); // selects the dom element where to add the new data
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
        movieImages.src = 'https://image.tmdb.org/t/p/w200' + data[id].poster_path;

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
            title: results.title,
            poster_path: results.poster_path,
            vote_average: results.vote_average,
            overview: results.overview
        }
    });

    return items
}