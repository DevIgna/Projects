const searchBarContEl = document.querySelector('.search-bar-container');
const magnifierEl = document.querySelector('.magnifier');

magnifierEl.addEventListener('click', () =>{
    searchBarContEl.classList.toggle('active');
});
