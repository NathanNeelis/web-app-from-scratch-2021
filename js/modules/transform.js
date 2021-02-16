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

function filterSingleObject(results) {
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
}


function removeGarbage(data) {
    let items = data.filter(function (items) {
        return items.poster_path != undefined;
    })
    return items
}

// Resource filter (recap): FUN FUN FUNCTION https://www.youtube.com/watch?v=BMUiFMZr7vk 


function checkForDoubles(movie) {
    const uniqueArray = movie.filter((value, index) => {
        const keys = JSON.stringify(value);
        return index === movie.findIndex(obj => {
            return JSON.stringify(obj) === keys;
        });
    });

    return uniqueArray;

    // Thanks to Eydrian @ stackoverflow
    // Resource: https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript

}

function arrayLimited(data) {
    let limitedArray = data;
    if (limitedArray.length > 10) {
        limitedArray.pop();
    }
    return limitedArray;
}

/* beautify preserve:start */
export { arrayLimited, checkForDoubles, removeGarbage, filterSingleObject, filterObject }
/* beautify preserve:end */