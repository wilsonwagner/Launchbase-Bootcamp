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


/*
const usuario = {
    nome: 'Diego',
    empresa: {
        nome: "Rocketseat",
        cor: "roxo",
        foco: "Programação",
        endereco: {
            rua: "Rua Guilherme Gembala",
            numero: 260
        }
    }
}

console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`)
*/