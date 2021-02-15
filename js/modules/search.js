import {
    getData
} from './getdata.js';

import {
    render
} from './render.js'

export function updateSearch() {
    // sets wrapper to show on click
    const wrapper = document.querySelector('.searchResultsWrapper');
    wrapper.classList.remove('hide');

    // saving input in local storage
    const storage = window.localStorage;
    let search = document.querySelector('.searchField').value;
    storage.setItem('searching', search)

    // console.log('this is what you are searching for:', search)

    // fetch data from input value
    getData(search).then(data => {
        const section = document.querySelector('.searchResults');
        section.innerHTML = '';
        render(data, section, search);
    });
}

// set searchbar with latest search item
export function setSearchBar() {
    // checks the local storage and updates the input field with the value
    let storageValue = localStorage.getItem('searching')
    let search = document.querySelector('.searchField');
    search.value = storageValue;

    // check on local storage
    const wrapper = document.querySelector('.searchResultsWrapper');
    wrapper.classList.remove('hide')

    if (storageValue == null) {
        wrapper.classList.add('hide');

    } else if (storageValue != null) {
        wrapper.classList.remove('hide');
    }

    return storageValue
}