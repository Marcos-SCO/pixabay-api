function changeFooterYear() {
  let $footerDate = document.querySelector('#footerDate');
  if (!$footerDate) return;
  
  let footerDateValue = +$footerDate.getAttribute('date-value');

  let currentYear = new Date().getFullYear();

  if (footerDateValue < currentYear) $footerDate.innerText = `2020 - ${currentYear} | `;
}

document.addEventListener("DOMContentLoaded", changeFooterYear);