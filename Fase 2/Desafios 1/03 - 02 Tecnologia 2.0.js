const users = [
    {nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    {nome: "Wilson", tecnologias: ["Python", "Djanbo"] },
    {nome: "Pedro", tecnologias: ["Excel", "CSS"] },
    {nome: "Douglas", tecnologias: ["Windows", "CSS"] }
]

function checaTrabalhaComCSS(usuario){
    for (let tecn of usuario.tecnologias) {
        if (tecn == "CSS") return true
    }
    return false
}

for (let w = 0; w < users.length; w++){
    const userWorkCss = checaTrabalhaComCSS(users[w])
    if (userWorkCss){
        console.log(`O usuário ${users[w].nome} trabalha com CSS`)
    }
}