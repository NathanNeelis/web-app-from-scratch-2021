export function render(data, section) {
    section.innerHTML = '';
    renderToHtml(data, section);
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