const imageContainerEl = document.querySelector('.image-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let x = 0;
let timerReset;

prevBtn.addEventListener('click', ()=>{
    x = x + 45;
    clearTimeout(timerReset);
    updateGallery();
});

nextBtn.addEventListener('click', ()=>{
    x = x - 45;
    clearTimeout(timerReset);
    updateGallery();
});


function updateGallery() 
{
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timerReset = setTimeout(() =>{
        x = x - 45;
        updateGallery();
    }, 2500);
}

updateGallery();