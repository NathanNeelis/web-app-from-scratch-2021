### Refactoring
Dit is me oude code die ik ben gaan refactoren
```Javascript
async function defaultSearch() {
    // selection section to render html
    const section = document.querySelector('.searchResults');

    // storage value
    let storageValue = localStorage.getItem('searching')

    // checkForStorage(storageValue, section);
    checkForStorage(storageValue);

    getData(urlSearch + storageValue)
        .then(data => {

            // function(s) to transform data  
            let cleanObject = filterObject(data)

            console.log(data)

            // function(s) to render data
            setSearchBar(); // Sets local storage item in search bar
            section.innerHTML = ''; // remove existing HTML
            renderToHtml(cleanObject, section) // renders the top movies
        });
}
```

```Javascript
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
}
```
