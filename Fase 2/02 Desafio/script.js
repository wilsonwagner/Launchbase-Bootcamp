const modalOverlay = document.querySelector('.modal-overlay')
const grids = document.querySelectorAll('.grid')

for(let grid of grids){
    grid.addEventListener("click", function(){
        const site = grid.getAttribute('id')
            modalOverlay.classList.add('active')
            modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${site}`
        })
}

document.querySelector('.modalClose').addEventListener('click', function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
})

