const containerEl = document.querySelector('.container');
const sLeftEl = document.querySelector('.left');
const sRightEl = document.querySelector('.right');



sLeftEl.addEventListener('mouseenter', () =>{
    containerEl.classList.add('active-left');
});

sLeftEl.addEventListener('mouseleave', () =>{
    containerEl.classList.remove('active.left');
});

sRightEl.addEventListener('mouseover', () =>{
    containerEl.classList.add('active-right');
});

sRightEl.addEventListener('mouseleave', () =>{
    containerEl.classList.remove('active-right');
});