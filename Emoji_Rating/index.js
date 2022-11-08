const startsEl = document.querySelectorAll('.fa-star');
const emojiEl = document.querySelectorAll('.far');
const colorEl = ['red', 'orange', 'lightblue','lightgreen' ,'green'];

updateRating(0);

startsEl.forEach((el,index) =>{
    el.addEventListener('click', () =>{
        /* checkear */
        //console.log('clicked');
        updateRating(index)
    })
});

function updateRating(index){
    startsEl.forEach((el,idx)=>{
        if(idx < index + 1){ //el index + 1 es para que cuando haga click, se marque la estrella correcta
            el.classList.add('active')
            /* teniendo este if con el classlist, lo que provoca es que
            cuando toque por ejemplo la 4ta estrella, se va a pintar, pero si toco la 3ra, la
            4ta va a seguir pintada, para arreglar esto tengo que hacer un else, donde starEl
            y su classList, remover 'active'
            */
        }else{
            el.classList.remove('active');
        }
        
    });
    /* ahora que cambian las estrellas según el evento, hacerlo con 
        los emojis. 
    */
    emojiEl.forEach((el) =>{
        el.style.transform = `translateX(-${index * 50}px)`;
        el.style.color = colorEl[index];
    })
}