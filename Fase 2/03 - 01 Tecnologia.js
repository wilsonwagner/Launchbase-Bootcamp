const users = [
    {nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    {nome: "Wilson", tecnologias: ["Python", "CSS"] },
    {nome: "Pedro", tecnologias: ["Windows", "CSS"] },
    {nome: "Douglas", tecnologias: ["Excel", "CSS"] }
]

for (let x = 0; x < users.length; x++) {
    tecnologias = ""
    for (let y = 0; y < users[x].tecnologias.length; y++){
        tecnologias += users[x].tecnologias[y]
        if (y < (users[x].tecnologias.length - 1)){
            tecnologias += " e "
        }
    }
    console.log(`${users[x].nome} trabalha com ${tecnologias}`)


//Fórmula mais fácil:

for (let usuario of users) {
    console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(' e ')}`)
}