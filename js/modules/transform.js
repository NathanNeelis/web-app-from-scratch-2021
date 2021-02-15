export function filterObject(results) {
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

export function filterSingleObject(results) {
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


export function removeGarbage(data) {
    let items = data.filter(function (items) {
        return items.poster_path != undefined;
    })
    return items
}

// Resource filter (recap): FUN FUN FUNCTION https://www.youtube.com/watch?v=BMUiFMZr7vk 