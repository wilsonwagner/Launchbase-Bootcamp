const user = {
    Nome: "Wilson Wagner",
    empresa: {
        Nome: "Rocketseat",
        Cor: "Roxo",
        Foco: "Programação",
        Endereço: {
            Rua: "Rua Guilherme Gembala",
            Número: 260
        },
    },
}

console.log(`${user.Nome} trabalha na empresa ${user.empresa.Nome} que está localizada na ${user.empresa.Endereço.Rua}, ${user.empresa.Endereço.Número}`)