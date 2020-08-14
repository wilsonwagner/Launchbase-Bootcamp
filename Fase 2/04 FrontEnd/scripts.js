const modalOverlay = document.querySelector('.modal-overlay') // Seleciona qualquer elemento, baseado em classes, ID ou nomes da tag.
const cards = document.querySelectorAll('.card')

for(let img of cards){
    img.addEventListener("click", function(){ //Ouvidor de diversos eventos (Algo se mexendo, click etc)
        const videoID = img.getAttribute('id');
        modalOverlay.classList.add('active') //Adiciona uma classe em outra.
        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoID}`
    }) 
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ``
})


