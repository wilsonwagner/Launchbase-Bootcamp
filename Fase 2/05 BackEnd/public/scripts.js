const modalOverlay = document.querySelector('.modal-overlay') // Seleciona qualquer elemento, baseado em classes, ID ou nomes da tag.
const cards = document.querySelectorAll('.card')

for (let img of cards){
    img.addEventListener("click", function(){ //Ouvidor de diversos eventos (Algo se mexendo, click etc)
        const videoID = img.getAttribute('id');
        //A linha significa: "O que quer que eu faça quando clicar em um projeto?"
        window.location.href = `/video?id=${videoID}`
    }) 
}


   