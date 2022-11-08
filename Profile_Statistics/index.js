const counterEl = document.querySelectorAll('.counter');

counterEl.forEach((el) =>{
    el.innerText = '0';

    function increm(){
        let currNum = +counterEl.innerText //el "+" atras de counter convierte el '0' de string, a 0 de number
        const dataCeil = counterEl.getAttribute('data-ceil'); //como data-ceil es un atributo, me lo traigo para trabajarlo ya que es quien usa los numeros dentro del html.
        //console.log(dataCeil); me trae todos los data-ceil de los elementos creados.
        const increment = dataCeil / 15; 
        currNum = Math.ceil(currNum + increment);
        counterEl.innerText = currNum;
        if(currNum < dataCeil) setTimeout(increm, 50);
        counterEl.innerText = dataCeil;
    }
})