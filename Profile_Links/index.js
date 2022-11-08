const menuEl = document.querySelector('.menu');
const menuTextEl = document.querySelector('.menu p');
const socialListisEl = document.querySelector('.hide');
const liEls = document.querySelectorAll('.social-lists li');

menuEl.addEventListener('click', () =>{
    socialListisEl.classList.toggle('hide');
    menuEl.classList.toggle('rotate');
})

liEls.forEach((el) =>{
    el.addEventListener('click', () =>{
        menuTextEl.innerHTML = el.innerHTML;
        socialListisEl.classList.add('hide');
        menuEl.classList.toggle('rotate');
    })
})