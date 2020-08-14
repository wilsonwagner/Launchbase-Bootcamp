const modalOverlay = document.querySelector('.modal-overlay')
const grids = document.querySelectorAll('.grid')

for(let grid of grids){
    grid.addEventListener("click", function(){
        const site = grid.getAttribute('id')
        window.location.href = `/cursos/${site}`
        })
}