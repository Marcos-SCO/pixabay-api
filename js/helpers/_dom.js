window.createElement = function createElement(el, id = '', content = '') {
  let element = document.createElement(el);
  (id != '') ? element.id = id : '';
  content = (content != '') ? document.createTextNode(content) : '';
  element.appendChild(content);
  return element;
}

window.removeElement = function removeElement(elementId) {
  let element = document.querySelector(elementId);
  return (element != null) ? element.remove() : '';
}

window.emptyHtmlElement = function emptyHtmlElement(element) {
  let $element = document.querySelector(element);
  if (!$element) return;

  $element.innerHTML = '';
}

window.debounce = function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}