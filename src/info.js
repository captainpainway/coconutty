/*
 * info.js
 * Show/hide the info modal on button click.
*/

const info_button = document.getElementById('info');
const info_popup = document.getElementById('info_popup');

const infoButtonClick = () => {
  if(info_popup.classList.contains('hide')) {
    info_popup.className = 'show';
  } else {
    info_popup.className = 'hide';
  }
}

info_button.addEventListener('click', infoButtonClick);
