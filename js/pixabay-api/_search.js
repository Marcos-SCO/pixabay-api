window.searchKeyDown = function searchKeyDown() {
    const enterKeyCode = 13;

    let $searchInput = document.querySelector('[data-js="search-input"]');

    let timeout = null;

    $searchInput.addEventListener('keydown', (e) => {
        let isEnterKeyCode = e.keyCode == enterKeyCode;

        if (isEnterKeyCode) {
            e.preventDefault();
            return false;
        }

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            emptyHtmlElement('#showResults');
            searchApi(1, 12);
        }, 1000);

    });
}


window.searchLocalStorageItem = function searchLocalStorageItem(localStorageItem) {

    let localStorageValue = verifyLocalStorageItem(localStorageItem);

    if (!localStorageValue) return;

    let $searchInput = document.querySelector('[data-js="search-input"]');

    $searchInput.value = localStorageValue;

    searchApi();
}

window.searchApi = function searchApi(pageNumParam = 0, searchPerPage = 12) {

    let $searchInput = document.querySelector('[data-js="search-input"]');
    if (!$searchInput) return;

    let searchInputValue = $searchInput.value;

    if (searchInputValue == '') {
        removeElement('#loadMore');
        return;
    }

    setLocalStorageItem('searchItem', searchInputValue);

    let pageNumberValue = pageNumParam;

    if (pageNumberValue == 0) {

        let pageNumber = document.querySelector('#loadMore');

        pageNumberValue = pageNumber ?
            +pageNumber.getAttribute('page-number') + 1 : 1;
    }

    function debounce(func, timeout = 300) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
    }
    function saveInput() {
        console.log('Saving data');
    }
    const processChange = debounce(() => saveInput());


    // debounce((pageNumberValue, searchPerPage) => fetchApi(pageNumberValue, searchPerPage));
    // debounce((pageNumberValue) => loadMoreBtn(pageNumberValue));
}

window.fetchApi = async function fetchApi(pageNumber = 1, searchPerPage = 12) {

    const API_KEY = '17209326-870fbc4d237800348a0bc672f';

    let URL_API = "https://pixabay.com/api/?key=" + API_KEY
        + "&q=" + encodeURIComponent(search.value)
        + "&per_page=" + searchPerPage
        + '&page=' + pageNumber;

    try {
        let response = await fetch(URL_API);

        let body = await response.json();

        let hits = body.hits;
        let totalHits = body.totalHits;

        let hitsNumber = (+pageNumber * hits.length);
        console.log(hitsNumber);

        if (hitsNumber >= totalHits || pageNumber > 1 && hitsNumber == 0) {
            removeElement('#loadMore');
            return;
        }

        createImage(hits, totalHits);

    } catch (err) {
        console.log('Algo deu errado: ');
        console.error(err);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    searchKeyDown();
    searchLocalStorageItem('searchItem');
});