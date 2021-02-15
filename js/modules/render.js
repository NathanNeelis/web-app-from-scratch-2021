export function render(data, section, search) {
    renderToHtml(data, section, search);
}

export function renderDetailPage(data, section) {
    renderSingleObjectToHtml(data, section);
}

// OUTPUT HTML P ELEMENTS IN DIV ELEMENTS
function renderToHtml(data, section, search) {
    if (search) {
        const article = document.querySelector('.searchHeading');
        article.textContent = 'Search results for ' + search;
    }

    for (let id in data) {
        // create anchor tag
        let anchorTag = document.createElement('a');
        anchorTag.setAttribute('href', '#movies/' + data[id].id);

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
        section.appendChild(anchorTag)
        anchorTag.appendChild(newElement).appendChild(imageWrap).appendChild(movieImages); // appends the divs to the section
        anchorTag.appendChild(newElement).appendChild(heading);
    }
}


// OUTPUT HTML P ELEMENTS IN DIV ELEMENTS
function renderSingleObjectToHtml(data, section) {

    // Create IMG element
    let movieImages = document.createElement("img");
    movieImages.src = 'https://image.tmdb.org/t/p/w200' + data.poster_path;
    movieImages.className = "detailMovieImage";

    // create another div for images
    let imageWrap = document.createElement('div'); // creates a div
    imageWrap.className = "movieWrap"; // gives all divs a class of movie

    // Create header element
    let heading = document.createElement('h2'); // creates a paragraph element
    heading.innerHTML = data.title; // adds the movie titles to paragraph elements
    heading.className = "movieTitle";

    // Create overview element
    let overview = document.createElement('p'); // creates a paragraph element
    overview.innerHTML = data.overview; // adds the movie titles to paragraph elements
    overview.className = "movieOverview";

    // Create release data element
    let releaseData = document.createElement('p'); // creates a paragraph element
    releaseData.innerHTML = data.release_date; // adds the movie titles to paragraph elements
    releaseData.className = "releaseData";

    // Create average vote element
    let voteAverage = document.createElement('p'); // creates a paragraph element
    voteAverage.innerHTML = data.vote_average; // adds the movie titles to paragraph elements
    voteAverage.className = "voteAverage";


    // append 
    section.appendChild(imageWrap).appendChild(movieImages);
    section.appendChild(imageWrap).appendChild(voteAverage)
    section.appendChild(heading);
    section.appendChild(overview);
    section.appendChild(releaseData);
}