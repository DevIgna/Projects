const btnEl = document.querySelector('.btn');
const inputIdEl = document.getElementById('input');
const copyIconEl = document.querySelector('.fa-copy');
const alertContainerEl = document.querySelector('.alert-container')

btnEl.addEventListener('click', () => {
    createPassword();
});
copyIconEl.addEventListener('click', () => {
    copyPassword();
    if (inputIdEl.value) {
        alertContainerEl.classList.remove('active');
        setTimeout(() => {
            alertContainerEl.classList.add('active');
        }, 2000);
    }

});

function createPassword() {
    const chars = '0123456789abcdeefghijklmnopqrstuvwxyz!@¬#$%¨^&*()_+?:{}[].,;-~`ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let passwordLength = 14;
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum + 1)

    }
    inputIdEl.value = password;
    alertContainerEl.innerText = '¡ ' + password + ' Copiado!';
};

function copyPassword() {
    inputIdEl.select();
    /* si quiero usar movil */
    inputIdEl.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(inputIdEl.value);

};