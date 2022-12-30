window.notFoundFeedBack = function notFoundFeedBack($galleryArticle) {
  removeElement('#loadMore');

  let $searchInput = document.querySelector('[data-js="search-input"]');

  let p = createElement('p', 'notFound', 'Nenhum resultado encontrado para ' + $searchInput.value);
  p.style = 'margin-top:4rem;font-size:1.6rem;text-align:center;';

  $galleryArticle.insertAdjacentElement('beforeend', p);
}

window.createImage = function createImage(results, totalHits = null) {
  removeElement('#notFound');

  let $showResults = document.querySelector('#showResults');
  if (!$showResults) return;

  let $galleryArticle = document.getElementById('gallery');
  $galleryArticle.insertAdjacentElement('beforeend', $showResults);

  let $galleryArticleFigures =
    $galleryArticle.querySelectorAll('figure')?.length;

  if (results.length <= 0 && $galleryArticleFigures <= 0) {
    $showResults.innerHTML = '';
    notFoundFeedBack($galleryArticle);
    return;
  }

  let imgs = results.map((img) => {
    let split = img.tags;
    split = split.split(',', 1);

    return `<figure class='col-lg-3 col-md-4 col-6' id='${img.id}'><a href='${img.largeImageURL}' data-toggle='lightbox' data-lightbox='mygallery' data-title='${split}'><div class="galleryImgMax"><img src='${img.previewURL}' title='${split}' alt='${img.previewURL}' class='img-fluid img-thumbnail'></div><figcaption style='white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'><p class='text-center'>${split}</p></figcaption></a></figure>`;

  }).join(' ');

  $showResults.innerHTML += imgs;
}

window.loadMoreBtn = function loadMoreBtn(pageNumber = 1) {
  let $galleryArticle = document.getElementById('gallery');
  if (!$galleryArticle) return;

  let $loadMore = document.querySelector('#loadMore');

  if (!$loadMore) {
    // Load more btn
    $loadMore = document.createElement('button');
    $loadMore.classList = 'btn';
    $loadMore.id = 'loadMore';

    $galleryArticle.insertAdjacentElement('afterend', $loadMore);

    $loadMore.style =
      'display:opacity:1;block!important;border:1px solid;border-left:0;border-right:0;';

    $loadMore.innerText = 'Carregar Mais';
  }

  $loadMore.setAttribute('page-number', pageNumber);

  $loadMore.addEventListener('click', () => {
    $loadMore.innerText = 'Carregando...';
    searchApi();

    setTimeout(() => $loadMore.innerText = 'Carregar Mais', 3000);
  });
}