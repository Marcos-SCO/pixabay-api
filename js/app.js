let search = document.getElementById('search');
let timeout = null;
search.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
    clearTimeout(timeout);
    removeElement('#showResults');
    timeout = setTimeout(() => {
        searchApi();
    }, 1000);
});

let searchPerPage = 12;
// Load more btn
let loadMore = document.createElement('button');
loadMore.classList = 'btn';
loadMore.id = 'loadMore';
// loadMore.style = '';

let getLC = localStorage.getItem('searchItem');

if (getLC != undefined && getLC != null && getLC != '') {
    search.value = getLC;
    searchApi(searchPerPage);
}

function searchApi(searchPerPage) {
    if (search != '') {
        localStorage.setItem('searchItem', search.value);

        const API_KEY = '17209326-870fbc4d237800348a0bc672f';
        const URL_API = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(search.value) + "&per_page=" + searchPerPage;

        const xhr = new XMLHttpRequest();
        xhr.open('GET', URL_API, true);

        xhr.onloadStart = () => {
            // document.body.innerHTML = 'Carregando...';
        }

        // Spinner
        /*removeElement('#spinner');
        let spinner = document.createElement('div');
        spinner.id = 'spinner';
        let msg = document.createTextNode('Carregando...');
        xhr.onprogress = (e) => {
            spinner.appendChild(msg);
            document.body.appendChild(spinner);
        };*/

        xhr.onload = () => {
            if (xhr.status === 200 && xhr.readyState === 4) {
                removeElement('#showResults');

                let hits = JSON.parse(xhr.responseText).hits;
                let totalHits = JSON.parse(xhr.responseText).totalHits;

                createImage(hits, totalHits);

                // remove load more 
                if (hits.length == totalHits) {
                    removeElement('#loadMore');
                    console.log('ola')
                }
            }
            removeElement('#spinner');
        }
        xhr.send();
    } else {
        removeElement('#loadMore');
        removeElement('#showResults');
    }
}

function createImage(results, totalHits = null) {
    removeElement('#notFound');

    const showResults = document.createElement('section');
    showResults.id = 'showResults';
    showResults.classList = 'row text-center text-lg-left';
    let galleryArticle = document.getElementById('gallery');
    galleryArticle.insertAdjacentElement('beforeend', showResults);

    let imgs;
    if (results.length > 0) {
        imgs = results.map((img) => {
            let split = img.tags;
            split = split.split(',', 1);
            return `<figure class='col-lg-3 col-md-4 col-6' id='${img.id}'><a href='${img.largeImageURL}' data-toggle='lightbox' data-lightbox='mygallery' data-title='${split}'><div class="galleryImgMax"><img src='${img.previewURL}' title='${split}' alt='${search}' class='img-fluid img-thumbnail'></div><figcaption style='white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'><p class='text-center'>${split}</p>
            </figcaption></a></figure>`;
        }).join(' ');

        showResults.innerHTML = imgs;

        galleryArticle.insertAdjacentElement('afterend', loadMore);

        loadMore.style = 'display:opacity:1;block!important;border:1px solid;border-left:0;border-right:0;';
        loadMore.innerText = 'Carregar Mais';

        loadMore.addEventListener('click', () => {
            let searchPer = searchPerPage += 12;

            loadMore.style = 'display:none!important';
            searchApi(searchPer);
        });
    } else {
        removeElement('#showResults');
        removeElement('#loadMore');

        let p = createElement('p', 'notFound', 'Nenhum resultado encontrado para ' + search.value);
        p.style = 'margin-left:1rem';

        galleryArticle.insertAdjacentElement('beforeend', p);
    }
}

function createElement(el, id = '', content = '') {
    let element = document.createElement(el);
    (id != '') ? element.id = id : '';
    content = (content != '') ? document.createTextNode(content) : '';
    element.appendChild(content);
    return element;
}

function removeElement(elementId) {
    let element = document.querySelector(elementId);
    return (element != null) ? element.remove() : '';
}

/* window.onscroll = function (ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log('end');
    }
}; */