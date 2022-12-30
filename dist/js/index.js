/******/ var __webpack_modules__ = ({

/***/ 627:
/***/ (function() {

function changeFooterYear() {
  var $footerDate = document.querySelector('#footerDate');
  if (!$footerDate) return;
  var footerDateValue = +$footerDate.getAttribute('date-value');
  var currentYear = new Date().getFullYear();
  if (footerDateValue < currentYear) $footerDate.innerText = "2020 - ".concat(currentYear, " | ");
}
document.addEventListener("DOMContentLoaded", changeFooterYear);

/***/ }),

/***/ 321:
/***/ (function() {

window.createElement = function createElement(el) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var element = document.createElement(el);
  id != '' ? element.id = id : '';
  content = content != '' ? document.createTextNode(content) : '';
  element.appendChild(content);
  return element;
};
window.removeElement = function removeElement(elementId) {
  var element = document.querySelector(elementId);
  return element != null ? element.remove() : '';
};
window.emptyHtmlElement = function emptyHtmlElement(element) {
  var $element = document.querySelector(element);
  if (!$element) return;
  $element.innerHTML = '';
};
window.debounce = function debounce(func) {
  var _this = this;
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var timer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(_this, args);
    }, timeout);
  };
};

/***/ }),

/***/ 531:
/***/ (function() {

window.verifyLocalStorageItem = function verifyLocalStorageItem(localStorageItem) {
  var localValueItem = localStorage.getItem(localStorageItem);
  var localStorageHasValue = localValueItem != undefined && localValueItem != null && localValueItem != '';
  return localStorageHasValue ? localValueItem : false;
};
window.setLocalStorageItem = function setLocalStorageItem(itemKey, itemValue) {
  localStorage.setItem(itemKey, itemValue);
};

/***/ }),

/***/ 568:
/***/ (function() {

window.notFoundFeedBack = function notFoundFeedBack($galleryArticle) {
  removeElement('#loadMore');
  var $searchInput = document.querySelector('[data-js="search-input"]');
  var p = createElement('p', 'notFound', 'Nenhum resultado encontrado para ' + $searchInput.value);
  p.style = 'margin-top:4rem;font-size:1.6rem;text-align:center;';
  $galleryArticle.insertAdjacentElement('beforeend', p);
};
window.createImage = function createImage(results) {
  var _$galleryArticle$quer;
  var totalHits = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  removeElement('#notFound');
  var $showResults = document.querySelector('#showResults');
  if (!$showResults) return;
  var $galleryArticle = document.getElementById('gallery');
  $galleryArticle.insertAdjacentElement('beforeend', $showResults);
  var $galleryArticleFigures = (_$galleryArticle$quer = $galleryArticle.querySelectorAll('figure')) === null || _$galleryArticle$quer === void 0 ? void 0 : _$galleryArticle$quer.length;
  if (results.length <= 0 && $galleryArticleFigures <= 0) {
    $showResults.innerHTML = '';
    notFoundFeedBack($galleryArticle);
    return;
  }
  var imgs = results.map(function (img) {
    var split = img.tags;
    split = split.split(',', 1);
    return "<figure class='col-lg-3 col-md-4 col-6' id='".concat(img.id, "'><a href='").concat(img.largeImageURL, "' data-toggle='lightbox' data-lightbox='mygallery' data-title='").concat(split, "'><div class=\"galleryImgMax\"><img src='").concat(img.previewURL, "' title='").concat(split, "' alt='").concat(img.previewURL, "' class='img-fluid img-thumbnail'></div><figcaption style='white-space: nowrap;overflow: hidden;text-overflow: ellipsis;'><p class='text-center'>").concat(split, "</p></figcaption></a></figure>");
  }).join(' ');
  $showResults.innerHTML += imgs;
};
window.loadMoreBtn = function loadMoreBtn() {
  var pageNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var $galleryArticle = document.getElementById('gallery');
  if (!$galleryArticle) return;
  var $loadMore = document.querySelector('#loadMore');
  if (!$loadMore) {
    // Load more btn
    $loadMore = document.createElement('button');
    $loadMore.classList = 'btn';
    $loadMore.id = 'loadMore';
    $galleryArticle.insertAdjacentElement('afterend', $loadMore);
    $loadMore.style = 'display:opacity:1;block!important;border:1px solid;border-left:0;border-right:0;';
    $loadMore.innerText = 'Carregar Mais';
  }
  $loadMore.setAttribute('page-number', pageNumber);
  $loadMore.addEventListener('click', function () {
    $loadMore.innerText = 'Carregando...';
    searchApi();
    setTimeout(function () {
      return $loadMore.innerText = 'Carregar Mais';
    }, 3000);
  });
};

/***/ }),

/***/ 987:
/***/ (function() {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
window.searchKeyDown = function searchKeyDown() {
  var enterKeyCode = 13;
  var $searchInput = document.querySelector('[data-js="search-input"]');
  $searchInput.addEventListener('keydown', function (e) {
    var isEnterKeyCode = e.keyCode == enterKeyCode;
    if (isEnterKeyCode) {
      e.preventDefault();
      return false;
    }
    var debounceKeyDown = debounce(function () {
      emptyHtmlElement('#showResults');
      searchApi(1, 12);
    }, 1500);
    debounceKeyDown();
  });
};
window.searchLocalStorageItem = function searchLocalStorageItem(localStorageItem) {
  var localStorageValue = verifyLocalStorageItem(localStorageItem);
  if (!localStorageValue) return;
  var $searchInput = document.querySelector('[data-js="search-input"]');
  $searchInput.value = localStorageValue;
  searchApi();
};
window.searchApi = function searchApi() {
  var pageNumParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var searchPerPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;
  var $searchInput = document.querySelector('[data-js="search-input"]');
  if (!$searchInput) return;
  var searchInputValue = $searchInput.value;
  if (searchInputValue == '') {
    removeElement('#loadMore');
    return;
  }
  setLocalStorageItem('searchItem', searchInputValue);
  var pageNumberValue = pageNumParam;
  if (pageNumParam == 0) {
    var pageNumber = document.querySelector('#loadMore');
    pageNumberValue = pageNumber ? +pageNumber.getAttribute('page-number') + 1 : 1;
  }
  var fetchDebounce = debounce(function () {
    fetchApi(pageNumberValue, searchPerPage);
    loadMoreBtn(pageNumberValue);
  }, 2000);
  fetchDebounce();
};
var lastPageNum = 0;
window.fetchApi = /*#__PURE__*/function () {
  var _fetchApi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var pageNumber,
      searchPerPage,
      API_KEY,
      URL_API,
      response,
      body,
      hits,
      totalHits,
      hitsNumber,
      _args = arguments;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          pageNumber = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
          searchPerPage = _args.length > 1 && _args[1] !== undefined ? _args[1] : 12;
          API_KEY = '17209326-870fbc4d237800348a0bc672f';
          URL_API = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(search.value) + "&per_page=" + searchPerPage + '&page=' + pageNumber;
          if (!(lastPageNum == pageNumber)) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return");
        case 6:
          lastPageNum = pageNumber;
          _context.prev = 7;
          _context.next = 10;
          return fetch(URL_API);
        case 10:
          response = _context.sent;
          _context.next = 13;
          return response.json();
        case 13:
          body = _context.sent;
          hits = body.hits;
          totalHits = body.totalHits;
          hitsNumber = +pageNumber * hits.length;
          if (!(hitsNumber >= totalHits || pageNumber > 1 && hitsNumber == 0)) {
            _context.next = 20;
            break;
          }
          removeElement('#loadMore');
          return _context.abrupt("return");
        case 20:
          createImage(hits, totalHits);
          _context.next = 27;
          break;
        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](7);
          console.log('Algo deu errado: ');
          console.error(_context.t0);
        case 27:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[7, 23]]);
  }));
  function fetchApi() {
    return _fetchApi.apply(this, arguments);
  }
  return fetchApi;
}();
document.addEventListener("DOMContentLoaded", function () {
  searchKeyDown();
  searchLocalStorageItem('searchItem');
});

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";

// EXTERNAL MODULE: ./src/helpers/_dom.js
var _dom = __webpack_require__(321);
// EXTERNAL MODULE: ./src/helpers/_localStorage.js
var _localStorage = __webpack_require__(531);
// EXTERNAL MODULE: ./src/helpers/_date.js
var _date = __webpack_require__(627);
;// CONCATENATED MODULE: ./src/helpers/index.js



// EXTERNAL MODULE: ./src/js/pixabay-api/_html.js
var _html = __webpack_require__(568);
// EXTERNAL MODULE: ./src/js/pixabay-api/_search.js
var _search = __webpack_require__(987);
;// CONCATENATED MODULE: ./src/js/pixabay-api/index.js


;// CONCATENATED MODULE: ./src/js/app.js
// Helpers


}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// extracted by mini-css-extract-plugin

}();
