window.verifyLocalStorageItem = function verifyLocalStorageItem(localStorageItem) {
  let localValueItem = localStorage.getItem(localStorageItem);

  let localStorageHasValue =
    localValueItem != undefined
    && localValueItem != null && localValueItem != '';

  return localStorageHasValue ?
    localValueItem : false;
}

window.setLocalStorageItem = function setLocalStorageItem(itemKey, itemValue) {
  localStorage.setItem(itemKey, itemValue);
}